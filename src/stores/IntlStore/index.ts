import { create } from 'zustand';
import { LangMap } from './consts';

interface IntlStoreState {
  locale?: string;
  lang?: Record<string, string>;
  setLocale(locale: string): void;
}

export const useIntlStore = create<IntlStoreState>(set => ({
  locale: 'en',
  lang: LangMap['en'],
  setLocale(locale: string) {
    const newLang = LangMap[locale] != null ? LangMap[locale] : LangMap['en'];
    set(state => ({
      ...state,
      locale,
      lang: newLang,
    }));
  },
}));
