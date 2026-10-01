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
    { href: "/salud", label: "Salud" },
    { href: "/#contacto", label: "Contacto" },
  ],
} as const;

export const heroBrand = {
  placeName: "ACHANIZO",
  tagline: "En el valle de oro",
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
    slideBackground: "white" as const,
    showHeroCopy: false,
  },
  {
    image: "/galeria/aceitunas.jpg",
    alt: "Cosecha de aceituna en Fundo Montechico",
    imageFit: "cover" as const,
    objectPosition: "center 42%",
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

export const saludCopy = {
  eyebrow: "Salud",
  title: "Beneficios",
  intro:
    "Los beneficios que el consumo de aceite de oliva extra virgen tiene para ofrecernos son muchos, sobre todo si va acompañado de una dieta sana. Conócelos aquí.",
  benefits: [
    {
      title: "Vitamina E",
      description: "Actúa como desintoxicante natural.",
      image: "/salud/01-aceite-vitamina-e.jpg",
      imageAlt: "Aceite de oliva dorado",
    },
    {
      title: "Ácidos grasos",
      description: "Ayudan a reducir el riesgo de sufrir enfermedades del corazón.",
      image: "/salud/02-aceitunas-acidos-grasos.jpg",
      imageAlt: "Aceitunas verdes y negras",
    },
    {
      title: "Vitamina A",
      description:
        "Contribuye a protegernos de diferentes virus, fortaleciendo el sistema inmunológico.",
      image: "/salud/03-vitamina-a.jpg",
      imageAlt: "Aceite de oliva en cocina",
    },
    {
      title: "Aumenta el colesterol HDL",
      description: '(Colesterol "bueno") y reduce el LDL (colesterol "malo").',
      image: "/salud/04-colesterol-hdl.jpg",
      imageAlt: "Estilo de vida activo",
    },
    {
      title: "Vitamina K",
      description: "Ayuda a la coagulación de la sangre.",
      image: "/salud/05-vitamina-k.jpg",
      imageAlt: "Alimentación saludable",
    },
    {
      title: "Propiedades antiinflamatorias",
      description:
        "Puede reducir síntomas de trastornos digestivos (gases o hinchazón abdominal).",
      image: "/salud/06-antiinflamatorio.jpg",
      imageAlt: "Ensalada fresca",
    },
    {
      title: "Propiedades fortalecedoras",
      description: "Astringentes y antisépticas (piel, uñas y cabello).",
      image: "/salud/07-piel-cabello.jpg",
      imageAlt: "Cuidado personal natural",
    },
    {
      title: "Vitamina D",
      description: "Contribuye a la absorción de calcio en el cuerpo.",
      image: "/salud/08-vitamina-d.jpg",
      imageAlt: "Valle y naturaleza",
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
