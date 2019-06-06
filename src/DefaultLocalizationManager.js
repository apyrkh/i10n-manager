import { DefaultTextManager } from 'text-manager';


export default function DefaultLocalizationManager(locale = 'en') {
  const textManager = new DefaultTextManager();

  return {
    getText: textManager.getText,
    registerTexts: textManager.registerTexts,
  };
}
