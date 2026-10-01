# Características CSS — Fundo Montechico

Referencia de tokens, utilidades globales y convenciones de layout. El origen de verdad de colores y fuentes está en `app/globals.css`; Tailwind 4 los expone como clases (`bg-olive`, `text-gold`, etc.).

## Paleta (`:root`)

| Token | Hex | Uso típico |
|--------|-----|------------|
| `--background` / `--paper` | `#faf6f5` | Fondo general, slider (no verde), tarjetas claras |
| `--foreground` / `--ink` | `#1c1a17` | Texto principal |
| `--olive` | `#2c3424` | Pie, menú móvil, títulos |
| `--gold` | `#b89a62` | Eyebrows, líneas decorativas, hovers |
| `--line` | `#e4ddd2` | Bordes suaves |

Clases Tailwind: `bg-background`, `bg-paper`, `bg-olive`, `text-ink`, `text-paper`, `text-gold`, `border-line`.

## Tipografía

- **Sans (cuerpo):** Outfit → `font-sans`, variable `--font-outfit` (`app/layout.tsx`).
- **Display (títulos):** Bodoni Moda → `font-display`, variable `--font-bodoni`.

Patrones habituales:

- Eyebrows: `text-xs tracking-[0.3em] uppercase text-gold`
- Títulos de sección: `font-display text-3xl uppercase text-olive sm:text-4xl`
- Microcopy / menú: `text-[11px]–[12px] tracking-[0.14em]–[0.22em] uppercase`

## Espaciado y secciones

- **`.section-block`** — `padding-block: clamp(4rem, 8vw, 6rem)` para bloques largos (catálogo, galería, etc.).
- **Historia en inicio** — padding propio en `components/inicio-sections.tsx`: menos arriba en móvil y `pb-[min(14vh,6rem)]` bajo el lead para separar la primera pantalla del párrafo «En el valle de Cháparra…».
- **Scroll a anclas** — `scroll-margin-top: 7rem` (desktop) y `5rem` (&lt;1024px) en `section[id]`, `footer[id]`, `#ubicacion`.

## Animaciones

- **`.animate-hero-copy`** — entrada del texto del hero (`hero-copy-in`, 0.9s): opacidad + `translateY(12px) → 0`.
- **Carrusel hero** — transición horizontal `duration-500 ease-out` al cambiar slide o soltar swipe.

## Hero slider (`components/hero-slider.tsx`)

### Altura del bloque

```
móvil:  38svh, max 360px, min 200px
sm:     42svh, max 400px
lg+:    56vh, max 560px
```

Fondo del carrusel: `bg-paper` (crema), no verde.

### Slides (datos en `lib/site-content.ts` → `heroSlides`)

| Slide | Imagen | Comportamiento |
|-------|--------|----------------|
| 1 Fundo | `/hero/fundo.jpg` | Clase **`.hero-slide-fundo`**: `cover` a altura completa; móvil `object-position: 22% center`; desktop `center 38%`. **Sin degradado** en slide 1; texto con `drop-shadow`. |
| 2 Producto | `/producto_principal.jpeg` | `object-contain`, fondo **`bg-white`**, sin degradado verde/oscuro extra. |
| 3 Aceitunas | `/galeria/aceitunas.jpg` | `object-cover` a **ancho completo** en todos los breakpoints; `object-position: center 42%`. Degradado inferior suave. |

Interacción: swipe horizontal (~56px umbral), autoplay 7s, bolitas blancas.

## Cabecera

- **Desktop:** barra de ubicación (`place.header`), menú izquierda / logo / menú derecha.
- **Móvil:** solo logo centrado + hamburguesa; menú full-screen `bg-olive` sin logo JPEG (evita recuadro blanco).

## Pie (`components/site-footer.tsx`)

- Fondo `bg-olive`, texto `text-paper`.
- Contacto en orden: Email → Teléfono → WhatsApp → Facebook → Instagram, cada uno con icono SVG inline.

## Contenido editable

Textos, rutas del slider y contacto: **`lib/site-content.ts`**.  
Colores y reglas del slide 1: **`app/globals.css`**.  
Ajustes de altura del hero: constante `HERO_HEIGHT` en **`components/hero-slider.tsx`**.

## Galería (`components/gallery-grid.tsx`)

- **Sin pies** bajo cada foto (captions retirados de la UI).
- **Móvil:** grid igual (`object-contain`, altura mínima); **tap** abre lightbox a pantalla completa.
- **Desktop (`lg+`):** celdas `aspect-[4/3]`, `object-cover`; **hover** oscurece ~30% + leve zoom; **click** abre la misma galería ampliada.
- **Lightbox:** fondo oscuro, contador `n / total`, flechas, tecla Escape y ← →, bloqueo de scroll; cierre al pulsar fuera de la imagen.

## Referencia de diseño

Inspiración general: [Fundo Incahuasi](https://fundoincahuasi.com/). Análisis comparativo: `docs/analisis-diseno-referencias.md`.

## Página Salud (`/salud`)

- Contenido: `saludCopy` en `lib/site-content.ts` (8 beneficios).
- Layout: `components/salud-benefit-rows.tsx` — filas alternadas imagen/texto (par = imagen izquierda).
- Menú: enlace «Salud» en `navLinks.secondary`.
