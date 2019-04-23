# @TODO: The project is under development...

# l10n-manager

Simple lightweight localization manager allows to manage localization texts

## Installation

`npm i l10n-manager -S`

## Getting started

In common case localization manager is used to get text or text with parameters by the `code`.

__Texts__ must be presented as an object where key is a `code` and value is a localized text.
__Texts__ may contain parameters which must be surrounded with braces `{}`.
__Parameter__ must be presented as a order number or a variable name.

```json
{
  "button.open": "Open",
  "button.open_in": "Open in {0} seconds",
  "button.close_in": "Close in {seconds} seconds",
}
```

Therefore when getting text __parameters__ must be an array (ordered parameters) or an object (named parameters) if necessary.

```javascript
const LocalizationManager = require('l10n-manager');

const buttonTexts = {
  'button.open': 'Open',
  'button.open_in': 'Open in {0} seconds',
  'button.close_in': 'Close in {seconds} seconds',
};
const l10n = new LocalizationManager('en');
l10n.addTexts('buttons', buttonTexts);

// ... then where necessary just get text by code

l10n.getText('button.open') === 'Open'; // getting text
l10n.getText('button.open_in', [5]) === 'Open in 5 seconds'; // getting text with ordered parameters
l10n.getText('button.close_in', { seconds: 5 }) === 'Close in 5 seconds'; // getting text with named parameters
```

## Advanced guide

In some cases it's needed to specify custom set of middlewares, e.g. parsing markdown, formatting numbers, dates and etc.
In this case localization managed can be used with a custom set of middlewares.

```javascript
const LocalizationManager = require('l10n-manager/src/l10n-manager');

const buttonTexts = {
  'button.open': 'Open',
  'button.close': 'Close',
};
const l10n = new LocalizationManager({ locale: 'en', middlewares: [CustomMiddleware1, CustomMiddleware2, ...] });
l10n.addTexts('buttons', buttonTexts);

// ... then where necessary just get text by code

l10n.getText('button.open');
```

## API

`LocalizationManager` API:
- `constructor(locale)`
  - `locale` - is a string locale, e.g. `en`, `en-US` and etc.
- `addTexts(key, texts)`
  - `key` - is a string key of a set of texts
  - `texts` - is a flat object where key is a code and value is a text, e.g. `{ 'button.open': 'Open' }`
- `getText(code, args)`
  - `code` - is a key of necessary text
  - `args` - is an array (ordered parameters) or an object (named parameters) if necessary, e.g. `[5]`, `{ seconds: 5 }`
