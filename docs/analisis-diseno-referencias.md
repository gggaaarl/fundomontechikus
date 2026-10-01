# Análisis de diseño — referencias del sector

Comparativa cualitativa de tres sitios del rubro aceite de oliva / agroindustrial en Perú y LATAM. Objetivo: entender **qué los hace atractivos** y qué conviene conservar en [Fundo Montechico](https://fundoincahuasi.com/) (nuestro proyecto).

Sitios analizados:

- [Fundo Incahuasi](https://fundoincahuasi.com/)
- [Olivos del Sur](https://olivosdelsur.com/)
- [El Olivar](https://www.elolivar.com.pe/) — página [Beneficios](https://www.elolivar.com.pe/beneficios/)

---

## 1. Qué tienen en común (y por qué “enganchan”)

### Narrativa de origen antes que de catálogo

Los tres anclan la marca en **tierra, valle y tradición** (Bella Unión, Villacurí/Lurín, proceso propio). No abren vendiendo SKUs: abren contando **de dónde sale** el producto. Eso genera confianza y diferencia frente a un e-commerce genérico.

### Identidad visual “premium natural”

Paleta recurrente: **verdes oliva**, **blancos/cremas**, **dorados o marrones** cálidos, fotografía grande de **olivar, cosecha y botella**. Tipografía con serif o display en títulos (elegancia) y sans en cuerpo (legibilidad). Sensación: **artesanal + exportación + limpio**.

### Jerarquía clara y pocas distracciones

Menús cortos: nosotros/historia, productos o catálogo, beneficios o bienestar, contacto. El usuario no elige entre veinte rutas; **recorre una historia** y cae en producto o contacto cuando ya está convencido.

### Fotografía como protagonista

Hero amplio (slider o banner), imágenes a pantalla casi completa en móvil, galerías o bloques imagen–texto. El producto se **ve** (color del aceite, aceituna, paisaje árido verde). Texto secundario respecto a la imagen en landings emocionales.

### Confianza y salud (sin ser clínico)

[El Olivar](https://www.elolivar.com.pe/beneficios/) y secciones similares traducen el aceite en **beneficios comprensibles** (vitaminas, corazón, digestión). [Incahuasi](https://fundoincahuasi.com/) mezcla calidad exportación, procesos y recomendaciones. [Olivos del Sur](https://olivosdelsur.com/) refuerza **certificaciones** y escala industrial seria. Todos venden **bienestar + calidad**, no solo litros.

### Contacto y conversión social

WhatsApp, teléfono visible, redes (Facebook, Instagram; Incahuasi también YouTube). Pie de página denso en datos útiles. En Olivos del Sur, además, tienda y logística — pero siempre con **humanidad** (horarios, dirección física).

### Ritmo de scroll (cadencia)

Alternancia de bloques: **hero → historia → mapa/ubicación → productos → galería/video → pie**. Espacio en blanco generoso, títulos con línea decorativa o eyebrow en mayúsculas. En móvil, **above the fold** cuidado: logo, una foto fuerte, un titular.

---

## 2. Diferencias útiles (no copiar todo)

| Aspecto | Incahuasi | Olivos del Sur | El Olivar |
|--------|-----------|----------------|-----------|
| Tono | Fundo único, exportación, timeline histórico | Industrial + tienda online, promociones | Lifestyle, recetas, bienestar editorial |
| Menú | Anclas en home + catálogo/galería | E-commerce grande, categorías | Beneficios, bienestar, cocina |
| Hero | Slider con copy mínimo | Carrusel comercial | Banners rotativos |
| Salud | Recomendaciones en home | Certificaciones | Página Beneficios (bloques imagen/texto) |

Montechico encaja mejor en el arco **Incahuasi + Beneficios tipo El Olivar**: fundo familiar, poco catálogo, página Salud dedicada.

---

## 3. Patrones de UI concretos que funcionan

1. **Eyebrow + título + línea dorada** — marca secciones sin gritar.
2. **Slider hero** con puntos y poco texto — misterio y paisaje.
3. **Menú móvil full-screen** de color sólido (verde) — premium y legible.
4. **Grid galería + lightbox** — exploración táctil.
5. **Bloques alternados imagen | texto** — ideal para beneficios (8 ítems en El Olivar).
6. **Mapa embebido** — prueba de origen real (Incahuasi / Montechico).
7. **Pie oscuro** con logo claro, teléfono, WhatsApp, email, redes.

---

## 4. Aplicación en Fundo Montechico

| Referencia | Implementación en el repo |
|------------|---------------------------|
| Home largo Incahuasi | `/` con `#historia`, `#ubicacion`, `#video` |
| Beneficios El Olivar | `/salud` — 8 filas imagen/texto alternadas |
| Galería Incahuasi | `/galeria` + lightbox |
| Tokens visuales | `globals.css` — olive, gold, paper (ver `caracteristicas-css.md`) |
| Menú | Inicio, Catálogo \| Galería, **Salud**, Contacto |

---

## 5. Conclusión

Lo que estos sitios comparten y hace que resulten **atractivos** no es un truco de moda: es **coherencia** entre lo que venden (aceite de origen) y cómo lo cuentan (paisaje, salud, confianza, contacto fácil). La web se siente como **extensión del fundo**, no como plantilla vacía. Montechico gana manteniendo fotos reales, copy en español claro, secciones pocas pero profundas, y una página de salud educativa al estilo [El Olivar Beneficios](https://www.elolivar.com.pe/beneficios/), sin perder la sobriedad de [Incahuasi](https://fundoincahuasi.com/).

---

*Documento interno del proyecto. Actualizar si cambian referencias o rutas.*
