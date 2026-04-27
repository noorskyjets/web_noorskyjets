import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Clock, Shield, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Charter: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.02, 1.0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.72]);

  const features = [
    { icon: <Award />, title: t.charter.features[0].title, desc: t.charter.features[0].desc },
    { icon: <Star />, title: t.charter.features[1].title, desc: t.charter.features[1].desc },
    { icon: <Clock />, title: t.charter.features[2].title, desc: t.charter.features[2].desc },
    { icon: <Shield />, title: t.charter.features[3].title, desc: t.charter.features[3].desc },
  ];

  return (
    <section id="charter" ref={sectionRef} className="section section--charter charter-section-bg">
      <div className="container">
        <motion.div
          className="charter-visual"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="charter-intro charter-intro--sticky">
            <span className="charter-intro__eyebrow">
              {t.charter.title}
            </span>
            <motion.h2
              className="charter-intro__tagline"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              <span className="charter-intro__line-1">{t.charter.intro.line1}</span>
              <span className="charter-intro__line-2">{t.charter.intro.line2}</span>
            </motion.h2>
          </div>
          <div className="charter-visual__frame">
            <motion.div
              className="charter-visual__media"
              style={{ y: visualY, scale: visualScale }}
              aria-hidden
            />
            <motion.span
              className="charter-visual__veil"
              style={{ opacity: veilOpacity }}
              aria-hidden
            />
          </div>
        </motion.div>

        <div className="charter-premium-grid charter-premium-grid--desktop">
          {features.map((feature, idx) => (
            <motion.article
              key={idx}
              className="charter-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.14 }}
            >
              <span className="charter-card__shine" aria-hidden />
              <span className="charter-card__vignette" aria-hidden />
              <span className="charter-card__accent" aria-hidden />

              <div className="charter-card__body">
                <div className="charter-card__icon">{feature.icon}</div>
                <h3 className="charter-card__title">{feature.title}</h3>
                <p className="charter-card__desc">{feature.desc}</p>
              </div>

              <span className="charter-card__corner" aria-hidden />
            </motion.article>
          ))}
        </div>

        <motion.div
          className="section-compact charter-compact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="section-compact-card charter-compact-card">
            <span className="section-compact-card__accent" aria-hidden />
            <ul className="section-compact-list">
              {features.map((feature, idx) => (
                <li key={idx} className="section-compact-list__item">
                  {feature.title}
                </li>
              ))}
            </ul>
            <span className="section-compact-card__corner" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Charter;
