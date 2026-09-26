export const site = {
  name: "Fundo Montechico",
  tagline: "Aceite de oliva extra virgen del Valle de Chaparra",
  locationLine: "Valle de Chaparra, Arequipa",
  contact: {
    phone: "",
    whatsapp: "",
    email: "info@fundomontechico.com",
    address: "Valle de Chaparra, Arequipa, Perú",
    facebookLabel: "Fundo Montechico — Productos Agrícolas",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592874851778&locale=es_LA",
  },
  video: {
    title: "CHAPARRA ACHANIZO VIVERO FUNDO MONTECHICO",
    embedUrl: "https://www.youtube.com/embed/NGp9IKwggiI",
  },
} as const;

/** Logo e «Inicio» → `/`. Izquierda: anclas al estilo Incahuasi + Catálogo. */
export const navLinks = {
  primary: [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
  ],
  secondary: [
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;

/** Hero de la portada (`/`). Archivo: `public/hero/fundo.jpg` ← `foto_fundo.jpg` */
export const heroSlides = [
  {
    image: "/hero/fundo.jpg",
    alt: "Fundo Montechico en el Valle de Chaparra",
    title: "Del valle a tu mesa",
    lines: [
      "En el Valle de Chaparra elaboramos un aceite de oliva extra virgen",
      "de aroma equilibrado y calidad pensada para cada hogar peruano.",
    ],
  },
] as const;

export const somosCopy = {
  eyebrow: "Historia",
  title: "Fundo Montechico",
  paragraphs: [
    "Fundo Montechico elabora aceite de oliva extra virgen en el Valle de Chaparra, Arequipa. La aceituna se elige en el fundo y el aceite sale de una presión física, sin mezclas.",
    "Cuidamos la calidad desde el cultivo hasta el envasado, con procesos pensados para conservar aroma, color y las propiedades de un aceite de oliva virgen extra.",
    "Hoy nuestra línea Don Santino representa ese trabajo: un aceite auténtico para la mesa y la cocina diaria.",
  ],
  /** Archivo: `public/galeria/4.jpg` ← `foto_galeria4.jpg` */
  image: "/galeria/4.jpg",
  imageAlt: "Vista del fundo Montechico",
} as const;

export const timelineEvents = [
  {
    year: "En el valle",
    title: "Chaparra y Achanizo",
    description:
      "El trabajo agrícola se concentra en el Valle de Chaparra, Arequipa, donde el vivero y el fundo Montechico desarrollan el cultivo del olivo.",
  },
  {
    year: "Vivero",
    title: "Plantación y cuidado del olivo",
    description:
      "Desde el vivero se preparan y mantienen plantas con manejo técnico, base para una aceituna sana en campo.",
  },
  {
    year: "Cosecha",
    title: "Recolección selectiva",
    description:
      "La aceituna se cosecha en el momento adecuado para preservar aroma y calidad, evitando daños que afecten el fruto.",
  },
  {
    year: "Extracción",
    title: "Primera prensada en frío",
    description:
      "El aceite se obtiene solo por presión física, sin disolventes, conservando las características de un extra virgen.",
  },
  {
    year: "Calidad",
    title: "Control y envasado",
    description:
      "Se supervisan condiciones sanitarias y proceso de envasado para llevar a mesa un producto trazable desde el fundo.",
  },
  {
    year: "Hoy",
    title: "Línea Don Santino",
    description:
      "Don Santino concentra nuestra propuesta comercial de aceite de oliva extra virgen para hogares y distribuidores.",
  },
] as const;

export const ubicacionCopy = {
  eyebrow: "Ubicación",
  title: "Valle de Chaparra",
  intro:
    "Nuestro fundo se desarrolla en el Valle de Chaparra, en la región Arequipa. El entorno costero-desértico del sur peruano, con valles fértiles irrigados, favorece cultivos como el olivo y define el carácter de nuestros productos.",
  features: [
    {
      title: "Suelo",
      description:
        "Valles amplios con suelos aptos para olivo, en un paisaje árido que concentra el esfuerzo agrícola en zonas de cultivo cuidadas.",
    },
    {
      title: "Clima",
      description:
        "Predominan temperaturas moderadas y baja pluviosidad, condiciones habituales en los valles arequipeños de la costa.",
    },
    {
      title: "Olivos",
      description:
        "Trabajamos con aceituna seleccionada en origen para obtener un aceite equilibrado en aroma y textura.",
    },
    {
      title: "Proceso",
      description:
        "Desde la cosecha hasta el envasado, controlamos etapas clave para mantener la calidad sanitaria y organoléptica.",
    },
  ],
} as const;

export const galleryItems = [
  {
    src: "/galeria/1.jpg",
    alt: "Fundo Montechico — imagen 1",
    caption: "Valle de Chaparra",
  },
  {
    src: "/galeria/3.jpg",
    alt: "Fundo Montechico — imagen 3",
    caption: "Cultivo de olivo",
  },
  {
    src: "/galeria/4.jpg",
    alt: "Fundo Montechico — imagen 4",
    caption: "El fundo",
  },
  {
    src: "/galeria/5.jpg",
    alt: "Fundo Montechico — imagen 5",
    caption: "Tradición agrícola",
  },
] as const;

export const homeTeasers = [
  {
    href: "/#historia",
    title: "Historia",
    description: "Conoce el fundo, el valle y nuestro recorrido en Chaparra.",
  },
  {
    href: "/catalogo",
    title: "Catálogo",
    description: "Aceite de oliva extra virgen Don Santino y su información nutricional.",
  },
  {
    href: "/galeria",
    title: "Galería",
    description: "Imágenes del fundo y del valle.",
  },
] as const;

/** Fondo del mapa en Historia (`public/galeria/3.jpg`). */
export const mapSectionBackground = "/galeria/3.jpg";
