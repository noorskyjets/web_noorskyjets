export type Language = 'en' | 'es' | 'fr';

export const translations = {
  en: {
    meta: {
      documentTitle: 'NoorSkyJets',
    },
    nav: {
      charter: 'Charter',
      experiences: 'Experiences',
      advisory: 'Advisory',
      contact: 'Contact',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
    },
    hero: {
      eyebrow: 'ESTABLISHED EXCELLENCE',
      tagline: 'Simple. Discreet. Efficient.',
      subtitle: 'A streamlined process designed for decision-makers.',
    },
    charter: {
      title: 'Private Jet Charter',
      intro:
        'Unrivaled mobility meets absolute discretion. We curate bespoke aviation solutions for those who demand precision, safety, and a seamless global reach.',
      features: [
        {
          title: 'Global Mobility',
          desc: 'Instant access to a curated fleet of high-performance jets for any mission.',
        },
        {
          title: 'Empty Leg Prime',
          desc: 'Exclusive opportunities for opportunistic global repositioning and travel.',
        },
        {
          title: 'Bespoke Missions',
          desc: 'Precision-engineered travel solutions tailored to your unique requirements.',
        },
        {
          title: 'Seamless Logistics',
          desc: 'White-glove ground coordination and comprehensive concierge support.',
        },
      ],
    },
    experiences: {
      title: 'VIP Travel & Experiences',
      intro:
        'Curated access and seamless logistics for high-end events and leisure. We provide one point of contact for your entire end-to-end itinerary.',
      concepts: [
        {
          name: 'Fashion Week Sprint',
          time: '48-72h',
          desc: 'Flights, stays, reservations, and schedule optimization.',
        },
        {
          name: 'Final Weekend',
          time: 'VIP End-to-End',
          desc: 'Private flights, ground logistics, and access planning.',
        },
        {
          name: 'Private Retreat',
          time: 'Door-to-Door',
          desc: 'Seamless execution for island, alpine, or desert escapes.',
        },
      ],
    },
    advisory: {
      title: 'Aircraft Advisory',
      intro:
        "Structured support for buy/sell conversations and fleet decisions-handled discreetly. We provide concierge-level coordination and introductions to the industry's most trusted operators and sellers.",
      list: [
        'Fleet strategy & utilization guidance',
        'Structured support for buy/sell discussions',
        'Professional introductions & networking',
        'Detailed coordination of contractual terms',
      ],
      noteTitle: 'PROFESSIONAL NOTE',
      note:
        '"We provide professional handling with clear boundaries. Final availability, pricing, and contractual terms are confirmed by operators, sellers, and relevant parties in our network."',
      mobileLead:
        'Discreet support for fleet strategy and aircraft buy/sell decisions. Concierge coordination and introductions to trusted operators and sellers. We set clear expectations; counterparties confirm final availability, pricing, and contracts.',
    },
    contact: {
      title: 'Inquire Now',
      tagline: 'Simple. Discreet. Efficient.',
      name: 'Your Name',
      email: 'Email Address',
      mission: 'Mission Type',
      dates: 'Preferred Dates',
      requirements: 'Requirements...',
      submit: 'Submit Request',
      channelsBlockTitle: 'Direct channels',
      channelsBlockLead: 'Call, WhatsApp, or email — whichever you prefer for priority coordination.',
      channelCall: 'Call',
      channelWhatsapp: 'WhatsApp',
      channelWhatsappAction: 'Open chat',
      channelMail: 'Email',
      channelInstagram: 'Instagram',
      instagramHandle: '@noorskyjets',
      formSubject: 'NoorSkyJets — New inquiry',
      formSending: 'Sending…',
      formSuccess: 'Thank you. We will respond shortly.',
      formError: 'Could not send. Please try again or email us directly.',
      formNotConfigured:
        'Form not configured yet. Create .env.local and set VITE_WEB3FORMS_ACCESS_KEY (see .env.example).',
      formValidation: 'Please enter your name and a valid email address.',
    },
  },
  es: {
    meta: {
      documentTitle: 'NoorSkyJets',
    },
    nav: {
      charter: 'Charter',
      experiences: 'Experiencias',
      advisory: 'Asesoría',
      contact: 'Contacto',
      themeToLight: 'Modo claro',
      themeToDark: 'Modo oscuro',
    },
    hero: {
      eyebrow: 'EXCELENCIA CONSOLIDADA',
      tagline: 'Simple. Discreto. Eficiente.',
      subtitle: 'Un proceso simplificado, diseñado para quienes toman decisiones.',
    },
    charter: {
      title: 'Charter de Jets Privados',
      intro:
        'Movilidad incomparable y discreción absoluta. Diseñamos soluciones de aviación a medida para quienes exigen precisión, seguridad y alcance global sin fricción.',
      features: [
        {
          title: 'Movilidad Global',
          desc: 'Acceso inmediato a una flota seleccionada de jets de alto rendimiento para cualquier misión.',
        },
        {
          title: 'Empty Leg Prime',
          desc: 'Oportunidades exclusivas para reposicionamiento global y viajes oportunos.',
        },
        {
          title: 'Misiones a Medida',
          desc: 'Soluciones de viaje diseñadas con precisión según tus requerimientos.',
        },
        {
          title: 'Logística Integral',
          desc: 'Coordinación terrestre premium y soporte concierge completo.',
        },
      ],
    },
    experiences: {
      title: 'Viajes y Experiencias VIP',
      intro:
        'Acceso curado y logística impecable para eventos premium y ocio. Ofrecemos un único punto de contacto para todo tu itinerario de principio a fin.',
      concepts: [
        {
          name: 'Sprint Fashion Week',
          time: '48-72h',
          desc: 'Vuelos, alojamiento, reservas y optimización de agenda.',
        },
        {
          name: 'Fin de Semana de Final',
          time: 'VIP Integral',
          desc: 'Vuelos privados, logística terrestre y planificación de accesos.',
        },
        {
          name: 'Retiro Privado',
          time: 'Puerta a Puerta',
          desc: 'Ejecución impecable para escapadas a islas, montaña o desierto.',
        },
      ],
    },
    advisory: {
      title: 'Asesoría de Aeronaves',
      intro:
        'Soporte estructurado para conversaciones de compra/venta y decisiones de flota, gestionado con discreción. Coordinamos a nivel concierge e introducciones con operadores y vendedores de mayor confianza.',
      list: [
        'Estrategia de flota y optimización de uso',
        'Soporte estructurado en conversaciones de compra/venta',
        'Introducciones profesionales y networking',
        'Coordinación detallada de términos contractuales',
      ],
      noteTitle: 'NOTA PROFESIONAL',
      note:
        '"Brindamos una gestión profesional con límites claros. La disponibilidad final, precios y términos contractuales son confirmados por operadores, vendedores y las partes relevantes de nuestra red."',
      mobileLead:
        'Asesoría discreta en estrategia de flota y decisiones de compra/venta. Coordinación tipo concierge e introducciones con operadores y vendedores de confianza. Marco claro: disponibilidad, precios y contratos los confirman las partes involucradas.',
    },
    contact: {
      title: 'Consultar Ahora',
      tagline: 'Simple. Discreto. Eficiente.',
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      mission: 'Tipo de Misión',
      dates: 'Fechas Preferidas',
      requirements: 'Requisitos...',
      submit: 'Enviar Solicitud',
      channelsBlockTitle: 'Canales directos',
      channelsBlockLead: 'Llamada, WhatsApp o correo — el canal que prefieras para coordinación prioritaria.',
      channelCall: 'Llamada',
      channelWhatsapp: 'WhatsApp',
      channelWhatsappAction: 'Abrir chat',
      channelMail: 'Correo',
      channelInstagram: 'Instagram',
      instagramHandle: '@noorskyjets',
      formSubject: 'NoorSkyJets — Nueva consulta',
      formSending: 'Enviando…',
      formSuccess: 'Gracias. Nos pondremos en contacto en breve.',
      formError: 'No se pudo enviar. Inténtalo de nuevo o escríbenos por correo.',
      formNotConfigured:
        'El formulario no está configurado. Crea .env.local y define VITE_WEB3FORMS_ACCESS_KEY (ver .env.example).',
      formValidation: 'Indica tu nombre y un correo electrónico válido.',
    },
  },
  fr: {
    meta: {
      documentTitle: 'NoorSkyJets',
    },
    nav: {
      charter: 'Charter',
      experiences: 'Experiences',
      advisory: 'Conseil',
      contact: 'Contact',
      themeToLight: 'Mode clair',
      themeToDark: 'Mode sombre',
    },
    hero: {
      eyebrow: 'EXCELLENCE ETABLIE',
      tagline: 'Simple. Discret. Efficace.',
      subtitle: 'Un processus fluide, concu pour les decideurs.',
    },
    charter: {
      title: 'Charter de Jets Prives',
      intro:
        'Une mobilite exceptionnelle et une discretion absolue. Nous concevons des solutions aeriennes sur mesure pour celles et ceux qui exigent precision, securite et portee mondiale.',
      features: [
        {
          title: 'Mobilite Globale',
          desc: 'Acces immediat a une flotte selectionnee de jets haute performance pour chaque mission.',
        },
        {
          title: 'Empty Leg Prime',
          desc: 'Opportunites exclusives de repositionnement mondial et de voyages opportunistes.',
        },
        {
          title: 'Missions Sur Mesure',
          desc: 'Des solutions de voyage concues avec precision selon vos exigences.',
        },
        {
          title: 'Logistique Fluide',
          desc: 'Coordination au sol premium et accompagnement conciergerie complet.',
        },
      ],
    },
    experiences: {
      title: 'Voyages et Experiences VIP',
      intro:
        'Acces sur mesure et logistique sans faille pour evenements haut de gamme et loisirs. Un interlocuteur unique pour tout votre itineraire de bout en bout.',
      concepts: [
        {
          name: 'Sprint Fashion Week',
          time: '48-72h',
          desc: 'Vols, hebergements, reservations et optimisation du planning.',
        },
        {
          name: 'Weekend de Finale',
          time: 'VIP de Bout en Bout',
          desc: 'Vols prives, logistique au sol et planification des acces.',
        },
        {
          name: 'Retraite Privee',
          time: 'Porte a Porte',
          desc: 'Execution fluide pour des escapades insulaires, alpines ou desertiques.',
        },
      ],
    },
    advisory: {
      title: 'Conseil Aeronautique',
      intro:
        "Un accompagnement structure pour les echanges achat/vente et les decisions de flotte, avec discretion. Nous assurons une coordination de niveau conciergerie et des introductions aupres d'operateurs et vendeurs de confiance.",
      list: [
        "Strategie de flotte et optimisation d'utilisation",
        'Support structure pour les discussions achat/vente',
        'Introductions professionnelles et reseau',
        'Coordination detaillee des conditions contractuelles',
      ],
      noteTitle: 'NOTE PROFESSIONNELLE',
      note:
        '"Nous assurons une gestion professionnelle avec des limites claires. La disponibilite finale, les tarifs et les conditions contractuelles sont confirmes par les operateurs, vendeurs et parties concernees de notre reseau."',
      mobileLead:
        "Accompagnement discret sur la flotte et les decisions achat/vente. Coordination conciergerie et introductions aupres d'operateurs et vendeurs de confiance. Cadre clair: disponibilite, tarifs et contrats sont valides par les contreparties.",
    },
    contact: {
      title: 'Faire une Demande',
      tagline: 'Simple. Discret. Efficace.',
      name: 'Votre Nom',
      email: 'Adresse Email',
      mission: 'Type de Mission',
      dates: 'Dates Souhaitees',
      requirements: 'Exigences...',
      submit: 'Envoyer la Demande',
      channelsBlockTitle: 'Canaux directs',
      channelsBlockLead: 'Appel, WhatsApp ou email — le canal qui vous convient pour une coordination prioritaire.',
      channelCall: 'Appel',
      channelWhatsapp: 'WhatsApp',
      channelWhatsappAction: 'Ouvrir le chat',
      channelMail: 'Email',
      channelInstagram: 'Instagram',
      instagramHandle: '@noorskyjets',
      formSubject: 'NoorSkyJets — Nouvelle demande',
      formSending: 'Envoi en cours…',
      formSuccess: 'Merci. Nous vous repondrons sous peu.',
      formError: "L'envoi a echoue. Reessayez ou contactez-nous par email.",
      formNotConfigured:
        "Formulaire non configure. Creez .env.local et definissez VITE_WEB3FORMS_ACCESS_KEY (voir .env.example).",
      formValidation: 'Veuillez indiquer votre nom et une adresse email valide.',
    },
  },
} as const;

export type TranslationDictionary = (typeof translations)[Language];
