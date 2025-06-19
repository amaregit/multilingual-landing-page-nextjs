import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('Home');
  
  return (
    <section className="relative h-[80vh] min-h-[500px] max-h-[800px] w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/30 z-0">
        <Image
          src="/images/coffee-hero.jpeg"
          alt={t('heroImageAlt')}
          fill
          className="object-cover"
          priority
          quality={80}
        />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-lg">
          {t('heroSubtitle')}
        </p>
        <div className="flex gap-4">
          <Link 
            href="#menu" 
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            {t('viewMenuButton')}
          </Link>
          <Link 
            href="#contact" 
            className="bg-white/10 hover:bg-white/20 border border-white text-white px-6 py-3 rounded-lg text-lg font-medium transition backdrop-blur-sm"
          >
            {t('reserveButton')}
          </Link>
        </div>
        
        {/* Ethiopian coffee ceremony element */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">{t('ceremonyText')}</span>
        </div>
      </div>
    </section>
  );
}