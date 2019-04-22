const LocalizationManager = require('./src/l10n-manager');
const InsertParams = require('./src/middlewares/InsertParams');

function DefaultLocalizationManager(locale = 'en') {
  return new LocalizationManager({ locale, middlewares: [InsertParams] });
}

module.exports = DefaultLocalizationManager;
