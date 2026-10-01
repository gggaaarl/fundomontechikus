# Características CSS — Fundo Montechico

Guía del sistema visual del sitio. **Fuente de verdad:** `app/globals.css` (tokens), `app/layout.tsx` (fuentes), componentes listados abajo.

Documentos relacionados:

- `docs/analisis-diseno-referencias.md` — comparativa con sitios del sector (incl. fondo blanco).
- `docs/analisis-el-olivar-beneficios.md` — grid de la página Salud.

---

## 1. Filosofía de color

Las referencias del rubro ([Incahuasi](https://fundoincahuasi.com/), [El Olivar](https://www.elolivar.com.pe/), [Olivos del Sur](https://olivosdelsur.com/), [Fundo San Antonio](https://www.fundosanantonio.com.pe/)) usan **páginas blancas** para que fotos, botellas y tipografía oscura respiren. Montechico sigue esa línea:

| Zona | Fondo |
|------|--------|
| **Inicio, Catálogo, Galería, Salud** (contenido) | **Blanco** `#ffffff` |
| **Cabecera** (desktop y móvil, barra logo/menú) | **Blanco** semitransparente `bg-white/95` |
| **Pie** | Verde oliva `#2c3424` (contraste) |
| **Menú móvil abierto** | Verde oliva (pantalla completa) |
| **Celdas de texto en `/salud`** (grid beneficios) | Crema `#fdf7f0` (`--salud-cream`) — excepción tipo El Olivar |
| **Migas catálogo** | Gris claro `#e8e6e2` (solo franja breadcrumb) |

No usamos crema global en body: `--background` y `--paper` son **blanco**.

---

## 2. Tokens (`:root` en `app/globals.css`)

| Variable | Valor | Clase Tailwind | Uso |
|----------|--------|----------------|-----|
| `--background` | `#ffffff` | `bg-background` | `body`, secciones por defecto |
| `--paper` | `#ffffff` | `bg-paper` | Alias blanco (header legacy, modales claros) |
| `--foreground` / `--ink` | `#1c1a17` | `text-ink` | Texto principal |
| `--olive` | `#2c3424` | `bg-olive`, `text-olive` | Pie, menú móvil, títulos |
| `--gold` | `#b89a62` | `text-gold`, `bg-gold` | Eyebrows, líneas decorativas |
| `--line` | `#e4ddd2` | `border-line` | Separadores suaves |
| `--salud-cream` | `#fdf7f0` | `bg-salud-cream` | Solo celdas texto en grid Salud |

**Selección de texto:** fondo `#e7dcc4`, texto `#1c1a17` (`::selection` en `globals.css`).

---

## 3. Tipografía

Cargadas en `app/layout.tsx` (Google Fonts):

| Rol | Fuente | Variable CSS | Clase |
|-----|--------|--------------|--------|
| Cuerpo | Outfit | `--font-outfit` | `font-sans` |
| Títulos | Bodoni Moda | `--font-bodoni` | `font-display` |

Patrones habituales:

- **Eyebrow:** `text-xs font-bold tracking-[0.3em] uppercase text-gold`
- **H2 sección:** `font-display text-3xl uppercase text-olive sm:text-4xl`
- **Menú / microcopy:** `text-[11px]–[12px] tracking-[0.14em]–[0.22em] uppercase`
- **Catálogo — stock:** `text-sm font-medium text-[#3d7a4a]` (“En stock”)

---

## 4. Layout global

- **`body`:** `min-h-full flex flex-col bg-background text-ink` → columna: header + contenido + footer.
- **`.section-block`:** `padding-block: clamp(4rem, 8vw, 6rem)`.
- **Anclas:** `scroll-margin-top: 7rem` (desktop), `5rem` en viewport &lt; 1024px (`section[id]`, `footer#contacto`, `#ubicacion`).

---

## 5. Cabecera (`components/site-header.tsx`)

- Barra superior desktop: ubicación (`site.locationLine`).
- Fila principal: blanco, borde inferior `border-line`.
- Desktop: Inicio | Catálogo — logo — Galería | Salud (sin “Contacto” en menú; contacto en pie).
- Móvil: logo centrado, hamburguesa; overlay `bg-olive`.

---

## 6. Pie (`components/site-footer.tsx`)

- `bg-olive`, texto `text-paper`.
- Enlaces con iconos: Email, Teléfono, WhatsApp, Facebook, Instagram.

---

## 7. Página Inicio (`/`)

| Bloque | Componente | Fondo |
|--------|------------|--------|
| Hero slider | `hero-slider.tsx` | Blanco (slides producto `bg-white`) |
| Historia | `inicio-sections.tsx` | Blanco |
| Ubicación / mapa | `chaparra-map-section.tsx` | Foto + velo `bg-white/70`; tarjeta mapa blanca |
| Video | `inicio-sections.tsx` | Blanco |

### Hero (`components/hero-slider.tsx`)

Alturas (`HERO_HEIGHT`):

- Móvil: `38svh`, max 360px  
- `sm`: 42svh, max 400px  
- `lg+`: 56vh, max 560px  

Slides (`heroSlides` en `lib/site-content.ts`):

1. **Fundo** — `.hero-slide-fundo` en CSS: `cover`, sin degradado negro; texto con `drop-shadow`.
2. **Producto** — `object-contain`, fondo blanco.
3. **Aceitunas** — `object-cover`, degradado inferior ligero.

Interacción: swipe, autoplay 7s, bolitas blancas.

### CSS hero slide 1 (`app/globals.css`)

```css
.hero-slide-fundo { object-fit: cover; object-position: 22% center; }
@media (min-width: 1024px) { object-position: center 38%; }
```

---

## 8. Catálogo (`/catalogo`, `product-panel.tsx`)

- **Migas:** franja `bg-[#e8e6e2]`, texto `Productos > Aceite de oliva > …`
- **Contenido:** fondo blanco, grid 2 columnas (foto + ficha).
- **Título producto:** una línea, `text-xl` / `text-2xl`, `text-olive`.
- **Botones:** «Información nutricional» → ancla `#informacion-nutricional`; «Beneficios para la salud» → `/salud`.
- **Sección nutricional:** imagen de etiqueta (`productNutrition.labelImage`); clic abre lightbox con **zoom** (+ / −, rueda, teclado). Sin tabla HTML manual.
- **Foto producto:** mismo lightbox con zoom.

Datos: `catalogProduct` en `lib/site-content.ts`.

---

## 9. Galería (`/galeria`, `gallery-grid.tsx`)

- Página blanca; `PageBanner` blanco.
- Grid 1/2 columnas; sin pies bajo fotos.
- Desktop: hover oscurece imagen; click → lightbox.

---

## 10. Salud (`/salud`)

- Intro y disclaimer: **blanco**.
- Grid 8 filas: `salud-benefit-rows.tsx` — 50/50 ancho completo, sin gutters.
- Celdas **texto:** `bg-salud-cream` (#fdf7f0).
- Celdas **imagen:** `object-cover`, altura `min(36vw, 440px)` en desktop.
- Copy: `saludCopy` en `lib/site-content.ts`. Imágenes: `public/salud/`.

---

## 11. Animaciones

- **`.animate-hero-copy`:** keyframes `hero-copy-in` (0.9s), opacidad + `translateY`.
- **Carrusel:** `transition-transform duration-500 ease-out`.
- **Galería hover:** `bg-black/30`, `scale-[1.02]` en desktop.

---

## 12. Dónde editar qué

| Quiero cambiar… | Archivo |
|-----------------|---------|
| Colores globales | `app/globals.css` |
| Menú, textos, slider, catálogo, salud | `lib/site-content.ts` |
| Hero altura / swipe | `components/hero-slider.tsx` |
| Encuadre foto slide 1 | `app/globals.css` → `.hero-slide-fundo` |
| Migas / ficha producto | `components/product-panel.tsx` |
| Grid beneficios | `components/salud-benefit-rows.tsx` |
| Galería / lightbox | `components/gallery-grid.tsx` |

---

## 13. Build y clases Tailwind 4

Tailwind lee tokens en `@theme inline` dentro de `globals.css`. Tras cambiar variables, reiniciar `npm run dev` si alguna clase no se regenera.

---

*Última revisión alineada con fondo blanco en vistas principales y cuatro referencias de diseño en `analisis-diseno-referencias.md`.*
