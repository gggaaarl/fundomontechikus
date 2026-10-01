/** Ubicación: encabezado corto, pie legible, texto narrativo aparte */
export const place = {
  header: "Achanizo, Arequipa, Perú",
  /** Pie de página (líneas separadas) */
  footerLines: [
    "Achanizo",
    "Distrito de Chaparra, Provincia de Caravelí",
    "Departamento de Arequipa, Perú",
  ],
  /** Para fichas técnicas / catálogo */
  productOrigen: "Achanizo, Chaparra, Caravelí, Arequipa, Perú",
  /** Frase geográfica en textos largos */
  speech:
    "localidad de Achanizo, distrito de Chaparra, provincia de Caravelí, departamento de Arequipa",
} as const;

export const site = {
  name: "Fundo Montechico",
  tagline: "Aceite de oliva extra virgen",
  locationLine: place.header,
  contact: {
    phones: [
      { label: "Teléfono", number: "+51 928 551 396" },
      { label: "WhatsApp", number: "+51 928 551 396", whatsapp: true },
    ],
    email: "fundomontechico@gmail.com",
    addressLines: place.footerLines,
    facebookLabel: "Fundo Montechico",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592874851778&locale=es_LA",
    instagram: "https://www.instagram.com/fundomontechico/",
  },
  map: {
    placeName: "Achanizo",
    googleMapsUrl:
      "https://www.google.com/maps/place/Achanizo+04580/@-15.8051589,-73.968182,15z/data=!3m1!4b1!4m6!3m5!1s0x91156468d157cd2d:0xdb45b4c3bb3b2090!8m2!3d-15.8041366!4d-73.9652965!16s%2Fg%2F1trchh8s?entry=ttu",
    embedUrl:
      "https://maps.google.com/maps?q=-15.8041366,-73.9652965&hl=es&z=15&output=embed",
  },
  video: {
    title: "CHAPARRA ACHANIZO VIVERO FUNDO MONTECHICO",
    embedUrl: "https://www.youtube.com/embed/NGp9IKwggiI",
  },
  historySince: "1926",
} as const;

export const navLinks = {
  primary: [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
  ],
  secondary: [
    { href: "/galeria", label: "Galería" },
    { href: "/#contacto", label: "Contacto" },
  ],
} as const;

export const heroBrand = {
  placeName: "ACHANIZO",
  tagline: "EL VALLE DE ORO",
} as const;

export const heroSlides = [
  {
    image: "/hero/fundo.jpg",
    alt: "Fundo Montechico en el valle",
    imageFit: "cover" as const,
    objectPosition: "center 38%",
    showHeroCopy: true,
  },
  {
    image: "/producto_principal.jpeg",
    alt: "Aceite de oliva extra virgen Don Santino",
    imageFit: "contain" as const,
    objectPosition: "center",
    showHeroCopy: false,
  },
  {
    image: "/galeria/aceitunas.jpg",
    alt: "Cosecha de aceituna en Fundo Montechico",
    imageFit: "cover" as const,
    objectPosition: "center",
    showHeroCopy: false,
  },
] as const;

export const somosCopy = {
  eyebrow: "Nuestra historia",
  title: "Fundo Montechico",
  lead:
    "Más de un siglo de tradición, una tierra que nos une y un legado familiar que perdura.",
  paragraphs: [
    "En el valle de Cháparra, provincia de Caravelí, Arequipa, nace la historia de Fundo Montechico, una tradición familiar que se remonta a 1926, entre tierras fértiles, olivos y el profundo amor por el campo.",
    "A lo largo de generaciones, hemos cultivado nuestra tierra con dedicación, respeto por la naturaleza y pasión por la agricultura, preservando las raíces y enseñanzas de nuestros antepasados.",
    "Hoy, honramos ese legado a través de Don Santino, nuestro aceite de oliva extra virgen, elaborado con el compromiso de ofrecer un producto que refleje la esencia de nuestra tierra, la tradición familiar y la calidad de nuestros frutos.",
    "Fundo Montechico: una tierra, una familia, un legado que perdura.",
  ],
  image: "/galeria/4.jpg",
  imageAlt: "Vista del fundo Montechico",
} as const;

export const timelineEvents = [
  {
    year: "En el valle",
    title: "Achanizo y Chaparra",
    description:
      "El trabajo agrícola se concentra en la localidad de Achanizo, donde el vivero y el fundo Montechico desarrollan el cultivo del olivo.",
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
  title: "Achanizo",
  intro: `Nuestro fundo está en la ${place.speech}. El clima seco de los valles costeros de Arequipa y la irrigación del valle favorecen el olivo y marcan el carácter de nuestros productos.`,
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
    src: "/galeria/aceitunas.jpg",
    alt: "Aceituna recién cosechada en Fundo Montechico",
    caption: "Cosecha de aceituna",
  },
  {
    src: "/galeria/1.jpg",
    alt: "Valle de Chaparra",
    caption: "Foto del valle",
  },
  {
    src: "/galeria/3.jpg",
    alt: "Cultivo de olivo",
    caption: "Olivar",
  },
  {
    src: "/galeria/4.jpg",
    alt: "Vista del fundo",
    caption: "En el fundo",
  },
  {
    src: "/galeria/5.jpg",
    alt: "Tradición agrícola",
    caption: "Nuestro trabajo",
  },
] as const;

export const homeTeasers = [
  {
    href: "/#historia",
    title: "Historia",
    description: "Conoce el fundo y nuestro recorrido desde 1926.",
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

export const mapSectionBackground = "/galeria/3.jpg";
