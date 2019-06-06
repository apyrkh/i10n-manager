import DefaultLocalizationManager from './DefaultLocalizationManager';


const textsBundle = {
  'button.open': 'Open',
  'button.close': 'Close',
  'text.items_found': '{{0}} items found',
  'text.total_pages': '{{count}} pages',
};

const l10n = new DefaultLocalizationManager('en');
l10n.registerTexts('test', textsBundle);


console.log(l10n.getText('button.open'));
console.log(l10n.getText('button.close'));
console.log(l10n.getText('text.items_found', [5]));
console.log(l10n.getText('text.total_pages', { count: 6 }));
console.log(l10n.getText('nonexistent.code'));


console.time('getText-10000-times');
let result = '';
for (let i = 0; i < 10000; i++) {
  result = l10n.getText('button.open');
}
console.timeEnd('getText-10000-times');
