import de from './lang/de.json';
import en from './lang/en.json';
import fr from './lang/fr.json';
import ko from './lang/ko.json';
import es from './lang/es.json';
import th from './lang/th.json';
import zhCN from './lang/zh-CN.json';
import zhTW from './lang/zh-TW.json';

export const LangMap: { [key: string]: Record<string, string> } = {
  de,
  en,
  fr,
  ko,
  es,
  th,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};
