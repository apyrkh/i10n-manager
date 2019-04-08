const LocalizationManager = require('./l10n-manager');

// test data
const l10nResources = {
  'button.open': 'Open',
  'button.close': 'Close',
};

// test middlewares
function addZero(text) {
  return text + '0';
}

function addOne(text) {
  return text + '1';
}


// test execution
const l10n = new LocalizationManager(addZero, addOne);
l10n.register('test', l10nResources);


console.log(l10n.getText('button.open'));
console.log(l10n.getText('button.close'));
console.log(l10n.getText('nonexistent.code'));


console.time('getText-10000-times');
let result = '';
for (let i = 0; i < 10000; i++) {
  result = l10n.getText('button.open');
}
console.timeEnd('getText-10000-times');
