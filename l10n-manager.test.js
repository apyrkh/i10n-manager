const LocalizationManager = require('./l10n-manager');


const l10nResources = {
  'button.open': 'Open',
  'button.close': 'Close',
};
const l10n = new LocalizationManager('en', l10nResources);


console.log(l10n.getText('button.open'));
console.log(l10n.getText('button.close'));
console.log(l10n.getText('nonexistent.code'));
