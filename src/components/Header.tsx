import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import Link from 'next/link';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Header');
  return (
    <header className="bg-amber-900 text-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold">
          Selamta Café
        </Link>
        <nav className="flex items-center gap-6">
          <Link href={`/${locale}#menu`} className="hover:underline">
            {t('menu')}
          </Link>
          <Link href={`/${locale}#about`} className="hover:underline">
            {t('about')}
          </Link>
          <Link href={`/${locale}#contact`} className="hover:underline">
            {t('contact')}
          </Link>
          <LanguageToggle currentLocale={locale} />
        </nav>
      </div>
    </header>
  );
}