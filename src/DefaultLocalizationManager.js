import { createDefaultTextManager } from 'text-manager';


export default class DefaultLocalizationManager {
  constructor(locale = 'en') {
    this.locale = locale;
    this.textManager = createDefaultTextManager();
  }

  addTexts() {
    this.textManager.addTexts(...arguments)
  }

  getText() {
    this.textManager.getText(...arguments)
  }
}
