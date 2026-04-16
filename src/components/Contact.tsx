import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_FORM_READY, WEB3FORMS_ACCESS_KEY, CONTACT_WEBHOOK_URL } from '../config/contact';

const PRIORITY_PHONE_DISPLAY = '+44 7537 182175';
const PRIORITY_PHONE_TEL = 'tel:+447537182175';
const PRIORITY_WHATSAPP_URL = 'https://wa.me/447537182175';
const INSTAGRAM_URL = 'https://www.instagram.com/noorskyjets/';
const OFFICE_EMAIL = 'concierge@noorskyjets.com';

const WhatsAppIcon = () => (
  <svg className="contact-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg className="contact-instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
);

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const isPhone = (value: string) => /^[+0-9\s-]{7,20}$/.test(value.trim());

const validateContact = (value: string) => isEmail(value) || isPhone(value);

type Feedback = { kind: 'success' | 'error' | 'info'; text: string };

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [mission, setMission] = useState('');
  const [dates, setDates] = useState('');
  const [requirements, setRequirements] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!CONTACT_FORM_READY) {
      setFeedback({ kind: 'info', text: t.contact.formNotConfigured });
      return;
    }

    if (!name.trim() || !validateContact(contactInfo)) {
      setFeedback({ kind: 'error', text: t.contact.formValidation });
      return;
    }

    const message = [
      `Mission: ${mission.trim() || '—'}`,
      `Preferred dates: ${dates.trim() || '—'}`,
      '',
      requirements.trim() || '—',
    ].join('\n');

    setSending(true);
    try {
      const contactType = isEmail(contactInfo) ? 'email' : 'phone';
      const payload = {
        name: name.trim(),
        contact_info: contactInfo.trim(),
        contact_type: contactType,
        mission: mission || 'Not specified',
        dates: dates || 'TBD',
        requirements: requirements.trim(),
        submitted_at: new Date().toISOString(),
      };

      let success = false;
      let errorMsg = '';

      if (CONTACT_WEBHOOK_URL) {
        // Option 1: Automation Webhook (Make.com / Zapier)
        const res = await fetch(CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        success = res.ok;
      } else if (WEB3FORMS_ACCESS_KEY) {
        // Option 2: Fallback to Web3Forms
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: t.contact.formSubject,
            from_name: name.trim(),
            email: contactInfo.trim(),
            message: [
              `Mission: ${payload.mission || '—'}`,
              `Preferred dates: ${payload.dates || '—'}`,
              '',
              payload.requirements || '—',
            ].join('\n'),
          }),
        });
        const data = (await res.json()) as { success?: boolean; message?: string };
        success = !!data.success;
        errorMsg = data.message || '';
      }

      if (success) {
        setName('');
        setContactInfo('');
        setMission('');
        setDates('');
        setRequirements('');
        setFeedback({ kind: 'success', text: t.contact.formSuccess });
      } else {
        setFeedback({ kind: 'error', text: errorMsg || t.contact.formError });
      }
    } catch {
      setFeedback({ kind: 'error', text: t.contact.formError });
    } finally {
      setSending(false);
    }
  };

  const feedbackClass =
    feedback?.kind === 'success'
      ? 'contact-form__status contact-form__status--success'
      : feedback?.kind === 'info'
        ? 'contact-form__status contact-form__status--info'
        : feedback?.kind === 'error'
          ? 'contact-form__status contact-form__status--error'
          : '';

  return (
    <section id="contact" className="section section--contact relative">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-header">
            <h2 className="section-title text-4xl">{t.contact.title}</h2>
            <p className="contact-tagline">{t.contact.tagline}</p>
          </div>

          <div className="contact-layout">
            <div className="contact-mobile-lead">
              {t.contact.formMobileLead}
            </div>
            <motion.div
              className="contact-layout__cell contact-layout__cell--form"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact-form-card">
                <span className="contact-form-card__accent" aria-hidden />
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {feedback ? (
                    <p className={feedbackClass} role="status">
                      {feedback.text}
                    </p>
                  ) : null}
                  <div className="contact-form__row contact-form__row--split">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      placeholder={t.contact.name}
                      className="contact-field"
                      autoComplete="name"
                    />
                    <input
                      type="text"
                      name="contact"
                      value={contactInfo}
                      onChange={(ev) => setContactInfo(ev.target.value)}
                      placeholder={t.contact.email}
                      className="contact-field"
                    />
                  </div>
                  <div className="contact-form__row contact-form__row--split">
                    <select
                      name="mission"
                      value={mission}
                      onChange={(ev) => setMission(ev.target.value)}
                      className="contact-field contact-field--select"
                    >
                      <option value="" disabled>
                        {t.contact.missionOptions.placeholder}
                      </option>
                      {t.contact.missionOptions.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      name="dates"
                      value={dates}
                      onChange={(ev) => setDates(ev.target.value)}
                      className="contact-field"
                    />
                  </div>
                  <textarea
                    name="requirements"
                    rows={5}
                    value={requirements}
                    onChange={(ev) => setRequirements(ev.target.value)}
                    placeholder={t.contact.requirements}
                    className="contact-field"
                  />
                  <button type="submit" className="btn-primary contact-form__submit" disabled={sending}>
                    {sending ? t.contact.formSending : t.contact.submit}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.aside
              className="contact-aside contact-aside--channels contact-layout__cell"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="contact-channels-card">
                <span className="contact-channels-card__accent" aria-hidden />
                <h3 className="contact-channels-card__title">{t.contact.channelsBlockTitle}</h3>
                <p className="contact-channels-card__lead">{t.contact.channelsBlockLead}</p>
                <ul className="contact-channel-list">
                  <li className="contact-channel">
                    <div className="contact-channel__icon">
                      <Phone aria-hidden />
                    </div>
                    <div className="contact-channel__meta">
                      <span className="contact-channel__label">{t.contact.channelCall}</span>
                      <a href={PRIORITY_PHONE_TEL} className="contact-channel__value">
                        {PRIORITY_PHONE_DISPLAY}
                      </a>
                    </div>
                  </li>
                  <li className="contact-channel">
                    <div className="contact-channel__icon">
                      <WhatsAppIcon />
                    </div>
                    <div className="contact-channel__meta">
                      <span className="contact-channel__label">{t.contact.channelWhatsapp}</span>
                      <a
                        href={PRIORITY_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-channel__value"
                      >
                        {t.contact.channelWhatsappAction}
                      </a>
                    </div>
                  </li>
                  <li className="contact-channel">
                    <div className="contact-channel__icon">
                      <Mail aria-hidden />
                    </div>
                    <div className="contact-channel__meta">
                      <span className="contact-channel__label">{t.contact.channelMail}</span>
                      <a href={`mailto:${OFFICE_EMAIL}`} className="contact-channel__value">
                        {OFFICE_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="contact-channel">
                    <div className="contact-channel__icon">
                      <InstagramIcon />
                    </div>
                    <div className="contact-channel__meta">
                      <span className="contact-channel__label">{t.contact.channelInstagram}</span>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-channel__value"
                      >
                        {t.contact.instagramHandle}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
