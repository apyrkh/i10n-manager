function LocalizationManager(options = {}) {
  const locale = options.locale || 'en';
  const middlewares = options.middlewares || [];

  const keys = [];
  const l10nTexts = {};

  function applyMiddleware(text, ...args) {
    return middlewares.reduce((prevText, middleware, index) => {
      if (typeof middleware !== 'function') throw new Error('LocalizationManager: middleware [' + index + '] is not a function');

      return middleware(prevText, ...args);
    }, text);
  }

  return {
    addTexts(key, texts) {
      // check that resources with that key have not been registered yet
      if (keys.indexOf(key) === -1) {
        keys.push(key);

        // extend l10n texts
        for (let key in texts) {
          if (texts.hasOwnProperty(key)) {
            l10nTexts[key] = texts[key];
          }
        }
      }
    },
    getText(code, ...args) {
      const text = l10nTexts[code];
      return text ? applyMiddleware(text, ...args) : code;
    }
  };
}

module.exports = LocalizationManager;
