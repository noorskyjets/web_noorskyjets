import React from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Language } from '../i18n';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t.nav.charter, href: '#charter' },
    { name: t.nav.experiences, href: '#experiences' },
    { name: t.nav.advisory, href: '#advisory' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Espanol' },
    { code: 'fr', flag: '🇫🇷', label: 'Francais' },
  ];

  return (
    <nav className="site-nav" aria-label="Main">
      <div className="site-nav__inner">
        <a href="#top" className="site-nav__logo">
          <img src="/assets/logo.png" alt="" />
          NoorSkyJets
        </a>

        <div className="site-nav__right">
          <ul className="site-nav__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`site-nav__link${link.href === '#contact' ? ' site-nav__link--contact' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-nav__lang">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            >
              {theme === 'dark' ? <Sun strokeWidth={1.75} aria-hidden /> : <Moon strokeWidth={1.75} aria-hidden />}
            </button>
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                aria-label={item.label}
                onClick={() => setLanguage(item.code)}
                className={`site-nav__flag${language === item.code ? ' site-nav__flag--active' : ''}`}
              >
                <span>{item.flag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
