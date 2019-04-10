# The project is under development

# l10n-manager

Simple lightweight localization manager allows to manage localization texts

## Installation

`npm i l10n-manager -S`

## Usage

```javascript
const LocalizationManager = require('l10n-manager');

const l10nResources = {
  'button.open': 'Open',
  'button.close': 'Close',
};
const l10n = new LocalizationManager('en', l10nResources);

...

l10n.getText('button.open')
```
