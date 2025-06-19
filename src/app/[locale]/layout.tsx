// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import { notFound } from 'next/navigation';
import './../globals.css';
import Header from '@/components/Header';
import { routing } from '@/i18n/routing';
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Validate locale
  // if (!['en', 'am'].includes(locale)) notFound();
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }  // Load messages
  // const messages: AbstractIntlMessages = await import(`../../../messages/${locale}.json`).then(m => m.default);
  // console.log("locale", locale, messages);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          // messages={messages}
          now={new Date()}
          timeZone="Africa/Addis_Ababa"
          // Critical for client updates:
          key={locale} // Forces re-render on locale change
        >
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}