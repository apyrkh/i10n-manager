const LocalizationManager = require('./l10n-manager');
const InsertParams = require('./middlewares/InsertParams');

// test data
const l10nResources = {
  'button.open': 'Open',
  'button.close': 'Close',
  'text.items_found': '{{0}} items found',
  'text.total_pages': '{{count}} pages',
};

// test middlewares
function addZero(text) {
  return text + '0';
}

function addOne(text) {
  return text + '1';
}


// test execution
const l10n = new LocalizationManager({ locale: 'en', middlewares: [InsertParams] });
l10n.addTexts('test', l10nResources);


console.log(l10n.getText('button.open'));
console.log(l10n.getText('button.close'));
console.log(l10n.getText('text.items_found', [5]));
console.log(l10n.getText('text.total_pages', { count: 6 }));
console.log(l10n.getText('nonexistent.code'));


// console.time('getText-10000-times');
// let result = '';
// for (let i = 0; i < 10000; i++) {
//   result = l10n.getText('button.open');
// }
// console.timeEnd('getText-10000-times');
