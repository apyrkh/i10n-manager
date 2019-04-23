# @TODO: The project is under development...

# l10n-manager

Simple lightweight localization manager allows to manage localization texts

## Installation

`npm i l10n-manager -S`

## Getting started

In common case localization manager is used to get a text or a parameterized text by the `code`.

Texts must be presented as an object where key is a `code` and value is a localized `text`.
Texts may contain parameters which must be surrounded with braces `{}`.
Parameter is a number or a variable name.

```json
{
  "button.open": "Open",
  "button.open_in": "Open in {0} seconds",
  "button.close_in": "Close in {seconds} seconds"
}
```

Therefore parameters can be an array (ordered parameters) or an object (named parameters).

```javascript
const LocalizationManager = require('l10n-manager');

const buttonTexts = {
  'button.open': 'Open',
  'button.open_in': 'Open in {0} seconds',
  'button.close_in': 'Close in {seconds} seconds',
};
const l10n = new LocalizationManager('en');
l10n.addTexts('buttons', buttonTexts);

// ... then just get text by code

l10n.getText('button.open') === 'Open'; // get a text
l10n.getText('button.open_in', [5]) === 'Open in 5 seconds'; // get a text with ordered parameters
l10n.getText('button.close_in', { seconds: 5 }) === 'Close in 5 seconds'; // get a text with named parameters
```

## Advanced guide

In some cases it's needed to specify custom set of middlewares, e.g. parsing markdown, formatting numbers, dates and etc.
In this case localization managed can be used with a custom set of middlewares.

```javascript
const LocalizationManager = require('l10n-manager');

function CustomMiddleware1(text, parameters) {
  return text + ' Hello';
}

function CustomMiddleware2(text, parameters) {
  return text + ' World!';
}

const buttonTexts = {
  'button.open': 'Open',
};
const l10n = new LocalizationManager('en-US', [CustomMiddleware1, CustomMiddleware2]);
l10n.addTexts('buttons', buttonTexts);

// ... then just get text by code

l10n.getText('button.open') === 'Open Hello World!'; // get a text
```

## API

### LocalizationManager API:

- `constructor(locale, middlewares)`
  - `locale` - is a string locale, e.g. `en`, `en-US` and etc.
  - `middlewares` - is an array of functions
- `addTexts(key, texts)` - register texts by the given `key`
  - `key` - is a string key of a set of texts
  - `texts` - is a flat object where key is a `code` and value is a `text`, e.g. `{ 'button.open': 'Open' }`
- `getText(code, parameters)` - returns a `text` be the `code`
  - `code` - is a code of necessary text
  - `parameters` - is an array (ordered parameters) or an object (named parameters) if necessary, e.g. `[5]`, `{ seconds: 5 }`

### Middlewares

Middleware is a function which gets text and parameters and returns text.

- `function(text, parameters)` - returns text
  - `text` - is a string initial text or text from previous middleware
  - `parameters` - is an object or an array with parameters

- `function(text, ...args)` - returns text
  - `text` - is a string initial text or text from previous middleware
  - `...args` - is an array of next arguments. In common case the only one argument `parameters` may exits 
  but it's supported to send extra arguments between middlewares.
