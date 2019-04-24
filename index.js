const LocalizationManager = require('./src/l10n-manager');
const InsertParams = require('./src/middlewares/InsertParams');
const UseCodeIfNoText = require('./src/middlewares/UseCodeIfNoText');

function DefaultLocalizationManager(locale = 'en', middlewares = [InsertParams, UseCodeIfNoText]) {
  return new LocalizationManager(locale, middlewares);
}

module.exports = DefaultLocalizationManager;
