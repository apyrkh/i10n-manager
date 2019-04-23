function LocalizationManager(locale, middlewares) {
  const keys = [];
  const allTexts = {};

  function applyMiddleware(text, ...args) {
    if (!middlewares) {
      return text;
    }

    return middlewares.reduce((prevText, middleware, index) => {
      if (typeof middleware !== 'function') throw new Error('LocalizationManager: middleware [' + index + '] is not a function');

      return middleware(prevText, ...args);
    }, text);
  }

  return {
    addTexts(key, texts) {
      // check that resources with that key have not been registered yet
      if (keys.indexOf(key) > -1) {
        return;
      }

      // extend l10n texts
      for (let key in texts) {
        if (texts.hasOwnProperty(key)) {
          allTexts[key] = texts[key];
        }
      }
      keys.push(key);
    },
    getText(code, ...args) {
      const text = allTexts[code];
      return text ? applyMiddleware(text, ...args) : code;
    }
  };
}

module.exports = LocalizationManager;
