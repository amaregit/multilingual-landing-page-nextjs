// app/[locale]/test.tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Test() {
  const t = useTranslations('Test');
  return <h1>{t('hello')}</h1>;
}