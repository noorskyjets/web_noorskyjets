import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experiences: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [-16, 30]);

  const concepts = [
    { name: t.experiences.concepts[0].name, time: t.experiences.concepts[0].time, desc: t.experiences.concepts[0].desc },
    { name: t.experiences.concepts[1].name, time: t.experiences.concepts[1].time, desc: t.experiences.concepts[1].desc },
    { name: t.experiences.concepts[2].name, time: t.experiences.concepts[2].time, desc: t.experiences.concepts[2].desc },
  ];

  return (
    <section id="experiences" ref={sectionRef} className="section section--experiences relative">
      <div className="container">
        <motion.div
          className="experiences-visual"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="experiences-intro experiences-intro--sticky">
            <span className="charter-intro__eyebrow">{t.experiences.title}</span>
            <motion.h2
              className="charter-intro__tagline"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="charter-intro__line-1">{t.experiences.intro.line1}</span>
              <span className="charter-intro__line-2">{t.experiences.intro.line2}</span>
            </motion.h2>
          </div>
          <div className="experiences-visual__frame">
            <motion.div className="experiences-visual__media" style={{ y: visualY }} aria-hidden />
            <span className="experiences-visual__veil" aria-hidden />
          </div>
        </motion.div>

        <div className="experiences-grid experiences-grid--desktop">
          {concepts.map((concept, idx) => (
            <motion.article
              key={idx}
              className="experience-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <span className="experience-card__accent-top" aria-hidden />
              <span className="experience-card__fade" aria-hidden />
              <span className="experience-card__glow" aria-hidden />
              <span className="experience-card__shine" aria-hidden />
              <span className="experience-card__corner" aria-hidden />

              <div className="experience-card__body">
                <span className="experience-card__line" aria-hidden />
                <span className="experience-card__time">{concept.time}</span>
                <h3 className="experience-card__name">{concept.name}</h3>
                <p className="experience-card__desc">{concept.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="section-compact experiences-compact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="section-compact-card">
            <span className="section-compact-card__accent" aria-hidden />
            <ul className="section-compact-list">
              {concepts.map((concept, idx) => (
                <li key={idx} className="section-compact-list__item">
                  {concept.name}
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

export default Experiences;
