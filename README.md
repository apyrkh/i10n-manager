# l10n-manager

Simple lightweight localization manager allows to manage localization in web application

## Installation

`npm i l10n-manager -S`

## TL;DR

```javascript
// 1. initialize LocalizationManager
import LocalizationManager from 'l10n-manager';

const l10n = new LocalizationManager('en');

// 2. register texts bundle
const buttonTexts = {
  'button.open': 'Open',
  'button.open_in': 'Open in {{0}} seconds',
  'button.close_in': 'Close in {{seconds}} seconds',
};
l10n.registerTexts('buttons', buttonTexts);

// 3. use it
l10n.getText('button.open') === 'Open'; // get a text without parameters
l10n.getText('button.open_in', [5]) === 'Open in 5 seconds'; // get a text with ordered parameters
l10n.getText('button.close_in', { seconds: 5 }) === 'Close in 5 seconds'; // get a text with named parameters
```
