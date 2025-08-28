'use client';
import { useState, useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { LocaleContext } from '../context/LocaleContext';
import {Work_Sans} from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default function RootLayoutClient({ children }) {
  const [locale, setLocale] = useState('es');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    import(`@/messages/${locale}.json`).then(mod => setMessages(mod.default));
  }, [locale]);

  return (
    <html lang={locale}>

      <body className={`${worksans.className} antialiased`}>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </LocaleContext.Provider>
      </body>
      <GoogleAnalytics gaId="G-6J3DM22CMQ" />
    </html>
  );
}