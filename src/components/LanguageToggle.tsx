// 'use client';
// import { useRouter } from 'next/navigation';
// import { FaGlobe } from 'react-icons/fa'; // Fallback icon
// // import { FiFlag } from 'react-icons/fi'; // Alternative flag icon

// export default function LanguageToggle({ currentLocale }: { currentLocale: string }) {
//     const router = useRouter();

//     const toggleLanguage = () => {
//         const newLocale = currentLocale === 'en' ? 'am' : 'en';
//         router.push(`/${newLocale}`);
//     };

//     return (
//         <button
//             onClick={toggleLanguage}
//             className="flex items-center gap-2 p-2 rounded-full bg-amber-700 text-white cursor-pointer"
//         >
//             <span className="text-2xl">{currentLocale === 'en' ? '🇪🇹' : '🇺🇸'}</span>
//             <FaGlobe size={20} /> {/* Using globe as neutral icon */}
//             {currentLocale === 'en' ? 'አማርኛ' : 'English'}
//         </button>
//     );
// }

'use client';
import { useRouter } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageToggle({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'en' ? 'am' : 'en';
        // Get current path without locale
        // const path = window.location.pathname;
        // const pathWithoutLocale = path.startsWith(`/${currentLocale}`)
        //     ? path.replace(`/${currentLocale}`, '')
        //     : path;

        router.push(`/${newLocale}`);
    };

    return (
        <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex items-center gap-2 p-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-colors"
        >
            <span className="text-2xl" aria-hidden="true">
                {currentLocale === 'en' ? '🇪🇹' : '🇺🇸'}
            </span>
            <FaGlobe size={20} className="hidden sm:inline" />
            <span className="sr-only">Switch to </span>
            {currentLocale === 'en' ? 'አማርኛ' : 'English'}
        </button>
    );
}