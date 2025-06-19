import { useTranslations } from 'next-intl';

// Type safety for menu items
type MenuItem = {
  id: string;
  basePrice: number; // Store base price for calculations
};

export default function MenuSection() {
  const t = useTranslations('Menu');
console.log("Menu title", t('title'));

  // Define menu items with base prices (in ETB)
  const menuItems: MenuItem[] = [
    { id: 'coffee', basePrice: 25 },
    { id: 'latte', basePrice: 35 },
    { id: 'espresso', basePrice: 30 },
    { id: 'cappuccino', basePrice: 40 },
    { id: 'mocha', basePrice: 45 },
    { id: 'macchiato', basePrice: 38 },
    { id: 'americano', basePrice: 28 },
    { id: 'cortado', basePrice: 32 }
  ];

  // Format price with currency and translation
  const formatPrice = (item: MenuItem) => {
    try {
      return t('priceFormat', {
        price: item.basePrice,
        currency: t('currency')
      });
    } catch (error) {
      console.error('Translation error:', error);
      return `${item.basePrice} ETB`; // Fallback
    }
  };

  return (
    <section id="menu" className="py-8">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">
              {t(`items.${item.id}`)}
            </h3>
            <p className="text-amber-700 font-medium mt-2">
              {formatPrice(item)}
            </p>
            {/* Optional: Add description if available */}
            {/* {t.rich(`descriptions.${item.id}`, {
              small: (chunks) => (
                <small className="text-gray-600 mt-1 block">{chunks}</small>
              ),
              em: (chunks) => (
                <em className="text-amber-600">{chunks}</em>
              )
            })} */}
          </div>
        ))}
      </div>
    </section>
  );
}