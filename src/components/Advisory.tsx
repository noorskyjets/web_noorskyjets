import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Advisory: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.02, 1.0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.72]);
  const listItems = t.advisory.list;
  const mobileKeyPoints = listItems.slice(0, 3);

  return (
    <section id="advisory" ref={sectionRef} className="section section--advisory relative">
      <div className="container">
        <motion.div
          className="advisory-visual"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="advisory-header advisory-header--sticky text-center">
            <span className="charter-intro__eyebrow">{t.advisory.title}</span>
            <motion.h2
              className="charter-intro__tagline"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="charter-intro__line-1">{t.advisory.intro.line1}</span>
              <span className="charter-intro__line-2">{t.advisory.intro.line2}</span>
            </motion.h2>
          </div>
          <div className="advisory-visual__frame">
            <motion.div
              className="advisory-visual__media"
              style={{ y: visualY, scale: visualScale }}
              aria-hidden
            />
            <motion.span
              className="advisory-visual__veil"
              style={{ opacity: veilOpacity }}
              aria-hidden
            />
          </div>
        </motion.div>

        <div className="advisory-grid advisory-grid--desktop">
          <motion.div
            className="advisory-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="advisory-panel__accent" aria-hidden />
            <span className="advisory-panel__glow" aria-hidden />
            <div className="advisory-panel__body">
              <ul className="advisory-list">
                {listItems.map((item, idx) => (
                  <li key={idx} className="advisory-list__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="advisory-note-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            <article className="advisory-note-card">
              <span className="advisory-note-card__accent" aria-hidden />
              <span className="advisory-note-card__corner" aria-hidden />
              <h3 className="advisory-note-card__title">{t.advisory.noteTitle}</h3>
              <p className="advisory-note-card__body">{t.advisory.note}</p>
            </article>
          </motion.div>
        </div>

        <motion.div
          className="section-compact advisory-compact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="section-compact-card advisory-compact-card">
            <span className="section-compact-card__accent" aria-hidden />
            <ul className="section-compact-list">
              {mobileKeyPoints.map((item, idx) => (
                <li key={idx} className="section-compact-list__item">
                  {item}
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

export default Advisory;
