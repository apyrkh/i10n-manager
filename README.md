# l10n-manager

Simple lightweight localization manager allows to manage localization texts

## Installation

`npm i l10n-manager -S`

## TL;DR

```javascript
// 1. initialize LocalizationManager
const LocalizationManager = require('l10n-manager');
const l10n = new LocalizationManager('en');

// 2. register text bundle
const buttonTexts = {
  'button.open': 'Open',
  'button.open_in': 'Open in {{0}} seconds',
  'button.close_in': 'Close in {{seconds}} seconds',
};
l10n.registerBundle('buttons', buttonTexts);

// 3. use it
l10n.getText('button.open') === 'Open'; // get a text without parameters
l10n.getText('button.open_in', [5]) === 'Open in 5 seconds'; // get a text with ordered parameters
l10n.getText('button.close_in', { seconds: 5 }) === 'Close in 5 seconds'; // get a text with named parameters
```

## Getting started

In common case localization manager is used to get a text or a parameterized text by the `code`.

### Bundle

Bundle is an object where a key is a `code` of a localized `text` and a value is a localized `text`.
`text` may contain or may not contain parameters.
Parameter is a number or a variable name. Parameter must be surrounded with double braces `{{<parameter>}}`. 

Example:
```json
{
  "button.open": "Open",
  "button.open_in": "Open in {{0}} seconds",
  "button.close_in": "Close in {{seconds}} seconds"
}
```

## Advanced guide

### Default middleware

By default the following middlewares are used in `LocalizationManager`:
- `l10n-manager/middlewares/InsertParams` - inserts params in the text
- `l10n-manager/middlewares/UseCodeIfNoText` - uses code instead of a text if a text is not found

### Custom middleware

In some cases it's needed to specify custom set of middlewares, e.g. parsing markdown, formatting numbers, dates and etc.
In this case localization managed can be used with a custom set of middlewares.

```javascript
const LocalizationManager = require('l10n-manager');

function CustomMiddleware1(text, parameters, code) {
  return text + ' Hello';
}

function CustomMiddleware2(text, parameters, code) {
  return text + ' World!';
}

const buttonTexts = {
  'button.open': 'Open',
};
const l10n = new LocalizationManager('en-US', [CustomMiddleware1, CustomMiddleware2]);
l10n.registerBundle('buttons', buttonTexts);

// get text
l10n.getText('button.open') === 'Open Hello World!';
```

## API

### LocalizationManager API:

- `constructor(locale, middlewares)`
  - `locale`, string - manager's locale, e.g. `en`, `en-US` and etc.
  - `middlewares`, array of functions - necessary middlewares

- `registerBundle(key, bundle)`
  - `key`, string - the key of a bundle
  - `bundle`, object - a flat object where key is a `code` and value is a `text`, e.g. `{ 'button.open': 'Open' }`

- `getText(code, parameters)`
  - `code`, string - the code of a text
  - `parameters`, array/object - parameters, e.g. `[5]`, `{ seconds: 5 }`

### Middleware

Middleware is a function which gets text, parameters and code and returns text.

- `function(text, parameters, code)` - returns text
  - `text`, string - original text or text from previous middleware
  - `parameters`, object/array - parameters
  - `code`, string - the code of a text
