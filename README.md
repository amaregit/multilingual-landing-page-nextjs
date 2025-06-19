# 🇪🇹 Next.js Multilingual Landing Page

A modern responsive landing page for local businesses — built with **Next.js**, **TypeScript**, and **Next-Intl** i18n — supporting English and Amharic 🇺🇸🇪🇹.

Inspired by Ethiopian café culture ☕️.

## ✨ Features

- 🌍 Multilingual (English & Amharic)
- 🚀 Next.js App Router (13+)
- ⚡ Fast loading, SEO friendly
- 📱 Fully responsive (mobile-first)
- 🌐 Language switcher with routing
- 🎨 Styled with Tailwind CSS
- 🔑 Internationalization with Next-Intl
- 📝 Dynamic content: Menu, Contact, Hero
- ✅ Ready for production deployment
- 🔄 Deployed with Vercel (CI/CD)

## 🛠️ Tech Stack

- Next.js 13+ (App Directory)
- TypeScript
- Tailwind CSS
- Next-Intl (i18n)
- Vercel Hosting
- ESLint & Prettier (optional)

## 📁 Project Structure

src/
├── app
│ ├── [locale] (dynamic locale routes)
│ ├── layout.tsx
├── components
│ ├── HeroSection
│ ├── MenuSection
│ ├── ContactForm
│ ├── Header
│ ├── LanguageToggle
├── i18n (navigation & translations)
├── middleware.ts (locale detection)
└── providers/NextIntlProvider.tsx

## 🏗️ i18n Architecture

This project uses **Next-Intl** to support dynamic internationalization:

- `/src/i18n/routing.ts`: defines supported locales (`en`, `am`)
- `/src/i18n/navigation.ts`: locale-aware Next.js navigation helpers
- `/src/i18n/request.ts`: dynamic locale detection & message loading

**Dynamic segment:** `/[locale]/page.tsx` → Example: `/en`, `/am`

**Middleware:** detects locale from URL and serves correct content.


## 🚀 Live Demo

👉 [(https://multilingual-landing-page-nextjs.vercel.app/en)]

## 🐳 Deployment

This project is automatically deployed with **Vercel CI/CD** — on every push to `main` branch.

## 🧑 Author

Amare Zeru  
[LinkedIn](https://linkedin.com/in/amare_zeru)  
[GitHub](https://github.com/amarezegit)

## 🤝 Contributions

PRs & feedback welcome! 🌍

---

## How to Run Locally

```bash
# Install deps
npm install

# Run dev server
npm run dev

# Open http://localhost:3000/en or /am
