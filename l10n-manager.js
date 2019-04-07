function LocalizationManager(locale = 'en', l10nResources) {
  const currentLocale = locale;
  const texts = l10nResources || {};

  return {
    getLocale() {
      return currentLocale;
    },
    getText(code) {
      return texts[code] || code;
    }
  };
}

module.exports = LocalizationManager;
