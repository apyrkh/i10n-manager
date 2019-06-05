import DefaultTextManager from 'text-manager/src/DefaultTextManager';


export default function DefaultLocalizationManager(locale = 'en') {
  return new DefaultTextManager();
}
