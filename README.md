# @TODO: The project is under development...

# l10n-manager

Simple lightweight localization manager allows to manage localization texts

## Installation

`npm i l10n-manager -S`

## Getting started

In common case localization manager can be used to get simple text or text with inserted parameters.
Parameters can be set as an array (ordered parameters) or as an object (named parameters)

```javascript
const DefaultLocalizationManager = require('l10n-manager');

const buttonTexts = {
  'button.open': 'Open',
  'button.open_in': 'Open in {0} seconds',
  'button.close_in': 'Close in {seconds} seconds',
};
const l10n = new DefaultLocalizationManager('en');
l10n.addTexts('buttons', buttonTexts);

// ... then where necessary just get text by code

l10n.getText('button.open') === 'Open';
l10n.getText('button.open_in', [5]) === 'Open in 5 seconds'; // ordered parameters
l10n.getText('button.close_in', { seconds: 5 }) === 'Close in 5 seconds'; // named parameters
```

## Advanced guide

In some cases it's needed to specify custom set of middlewares, e.g. parsing markdown, formatting numbers, dates and etc.
In this case localization managed can be used with a custom set of middlewares.

```javascript
const LocalizationManager = require('l10n-manager/src/l10n-manager');
const InsertParams = require('l10n-manager/src/middlewares/InsertParams');

const buttonTexts = {
  'button.open': 'Open',
  'button.close': 'Close',
};
const l10n = new LocalizationManager({ locale: 'en', middlewares: [InsertParams] });
l10n.addTexts('buttons', buttonTexts);

// ... then where necessary just get text by code

l10n.getText('button.open');
```
