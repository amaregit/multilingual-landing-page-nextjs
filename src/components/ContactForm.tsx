'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          {t('successMessage')}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block mb-1">
              {t('nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              {t('emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              {t('messageLabel')}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-800 transition"
          >
            {t('submitButton')}
          </button>
        </form>
      )}
    </section>
  );
}