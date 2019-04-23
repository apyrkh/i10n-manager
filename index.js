const LocalizationManager = require('./src/l10n-manager');
const InsertParams = require('./src/middlewares/InsertParams');

function DefaultLocalizationManager(locale = 'en', middlewares = [InsertParams]) {
  return new LocalizationManager(locale, middlewares);
}

module.exports = DefaultLocalizationManager;
