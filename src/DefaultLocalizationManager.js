import { DefaultTextManager } from 'text-manager';


export default function DefaultLocalizationManager(locale = 'en') {
  const textManager = new DefaultTextManager();

  this.addTexts = textManager.addTexts;
  this.getText = textManager.getText;
}
