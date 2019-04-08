function LocalizationManager() {
  const middlewares = Array.from(arguments);
  const l10nNames = [];
  const l10nTexts = {};

  function applyMiddleware(text) {
    return middlewares.reduce((prevText, middleware, index) => {
      if (typeof middleware !== 'function') throw new Error('LocalizationManager: middleware [' + index + '] must be a function');

      return middleware(prevText);
    }, text);
  }

  return {
    register(name, texts) {
      // check that resources have not been already registered
      if (l10nNames.indexOf(name) === -1) {
        l10nNames.push(name);

        // extend l10n texts
        for (let key in texts) {
          if (texts.hasOwnProperty(key)) {
            l10nTexts[key] = texts[key];
          }
        }
      }
    },
    getText(code) {
      const text = l10nTexts[code];
      return text ? applyMiddleware(text) : code;
    }
  };
}

module.exports = LocalizationManager;
