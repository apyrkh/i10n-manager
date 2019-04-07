# l10n-manager
Localization manager allows to manage localization texts

## Usage

```javascript
const l10nResources = {
  'button.open': 'Open',
  'button.close': 'Close',
};
const l10n = new LocalizationManager('en', l10nResources);

...

l10n.getText('button.open')
```
