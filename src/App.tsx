import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Charter from './components/Charter';
import Experiences from './components/Experiences';
import Advisory from './components/Advisory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [mobileScrolled, setMobileScrolled] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowIntro(false);
    }, 2250);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches;

    /* Compact layout only after ~1.32× viewport scroll (scrollY>8 fired instantly and hid the “loose” margins). */
    const compactThresholdY = () => {
      const h = window.innerHeight || 640;
      return Math.max(200, Math.round(h * 1.32));
    };

    const updateScrolled = () => {
      if (!isMobileViewport()) {
        setMobileScrolled(false);
        return;
      }
      setMobileScrolled(window.scrollY > compactThresholdY());
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    window.addEventListener('resize', updateScrolled);

    return () => {
      window.removeEventListener('scroll', updateScrolled);
      window.removeEventListener('resize', updateScrolled);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Navbar />
          <div
            className={`app-content ${showIntro ? 'app-content--hidden' : 'app-content--revealed'} ${
              mobileScrolled ? 'app-content--mobile-scrolled' : ''
            }`}
          >
            <main>
              <Hero />
              <Charter />
              <Experiences />
              <Advisory />
              <Contact />
            </main>
            <Footer />
          </div>
          <AnimatePresence>
            {showIntro ? (
              <motion.div
                className="intro-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
              >
                <motion.img
                  src="/assets/logo.png"
                  alt="NoorSkyJets"
                  className="intro-screen__logo"
                  initial={{ scale: 1, opacity: 1, y: 0 }}
                  animate={{ scale: [1, 1, 0.08], y: [0, 0, -8], opacity: [1, 1, 0] }}
                  transition={{
                    duration: 2.85,
                    times: [0, 0.6, 1],
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
