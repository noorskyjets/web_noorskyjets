import React from 'react';
import { Moon, Sun, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Language } from '../i18n';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = React.useState(false);

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

  // For the mobile specific view:
  const selectedLang = languages.find(l => l.code === language) || languages[0];
  const otherLangs = languages.filter(l => l.code !== language);

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

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

            <a 
              href="#contact" 
              className="nav-contact-btn"
              aria-label={t.nav.contact}
            >
              <Mail strokeWidth={1.75} aria-hidden />
            </a>
            
            <div className={`lang-switcher ${isLangOpen ? 'lang-switcher--open' : ''}`}>
              {/* Desktop View: All flags in a row */}
              <div className="lang-switcher__desktop">
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

              {/* Mobile View: Animated Dropdown */}
              <div className="lang-switcher__mobile">
                <button
                  type="button"
                  className="site-nav__flag site-nav__flag--active"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-expanded={isLangOpen}
                >
                  <span>{selectedLang.flag}</span>
                </button>
                
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div 
                      className="lang-switcher__dropdown"
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      {otherLangs.map((item) => (
                        <button
                          key={item.code}
                          type="button"
                          aria-label={item.label}
                          onClick={() => handleLanguageSelect(item.code)}
                          className="site-nav__flag"
                        >
                          <span>{item.flag}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
