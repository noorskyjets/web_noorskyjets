import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  const bgY = useTransform(scrollY, [0, 1400], [0, 40]);
  const textY = useTransform(scrollY, [0, 1400], [0, -220]);

  return (
    <section id="top" ref={sectionRef} className="section hero-section relative">
      <div className="hero-section__rings-wrap" aria-hidden>
        <motion.div className="hero-section__rings" style={{ y: bgY }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <circle cx="50" cy="50" r="40" stroke="var(--color-gold)" fill="none" strokeWidth="0.42" />
            <circle cx="50" cy="50" r="30" stroke="var(--color-gold)" fill="none" strokeWidth="0.28" />
          </svg>
        </motion.div>
      </div>

      <motion.div className="container hero-section__content text-center" style={{ y: textY }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="hero-eyebrow font-bold uppercase">{t.hero.eyebrow}</h2>
          <h1 className="text-6xl md:text-9xl text-gold hero-title-spaced">NoorSkyJets</h1>
          <motion.img 
            src="/assets/logo.png" 
            alt="NoorSkyJets Logo" 
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <p className="hero-tagline text-gray">
            {t.hero.tagline} <br />
            <span className="hero-tagline-sub">{t.hero.subtitle}</span>
          </p>
        </motion.div>
      </motion.div>

      <div className="hero-scroll-line-wrap">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="hero-scroll-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
