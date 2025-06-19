import { useTranslations } from 'next-intl';
import MenuSection from '@/components/MenuSection';
// import ContactForm from '@/components/ContactForm';
// import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className="min-h-screen bg-amber-50">
      <HeroSection />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <MenuSection />

        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">{t('aboutTitle')}</h2>
          <p className="mb-6">{t('aboutText')}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="/images/cafe-interior.jpg"
              alt={t('cafeImageAlt')}
              className="rounded-lg shadow-lg"
              width={500} // Add the width and height to prevent layout shift
              height={500}
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('hoursTitle')}</h3>
              <p className="mb-4">{t('hoursText')}</p>
              <address className="not-italic">
                <strong>{t('addressTitle')}</strong><br />
                {t('addressLine1')}<br />
                {t('addressLine2')}
              </address>
            </div>
          </div>
        </section>

        {/* <ContactForm /> */}

        <div className="bg-gray-100 p-4 rounded-lg my-8">
          <p className="text-center italic">
            Built for Ethiopian businesses - 2x faster load times
          </p>
        </div>
      </div>
    </main>
  );
}