import { PropsWithChildren, useEffect } from 'react';

import { useIntlStore } from '.';
import { IntlProvider } from 'react-intl';

export const Intl = ({ children }: PropsWithChildren) => {
  const { locale = 'en', lang, setLocale } = useIntlStore();

  useEffect(() => {
    const locale = navigator.language;
    setLocale(locale);
  }, []);

  return (
    <IntlProvider messages={lang} locale={locale}>
      {children}
    </IntlProvider>
  );
};
