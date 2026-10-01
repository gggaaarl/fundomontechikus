# Análisis — El Olivar, página Beneficios

Referencia: [El Olivar — Beneficios](https://www.elolivar.com.pe/beneficios/)

Documento enfocado en la **sección de beneficios** (grid imagen + texto), que usamos como modelo para `/salud` en Fundo Montechico.

---

## 1. Objetivo de la página

Comunicar **salud y bienestar** del aceite de oliva sin parecer folleto médico: lenguaje claro, beneficios concretos (vitaminas, corazón, digestión) y **fotografía lifestyle** que emociona antes de leer.

El intro resume la promesa:

> *«Los beneficios que el consumo de aceite de oliva tiene para ofrecernos son muchos, sobre todo si es acompañado de una dieta sana. Conócelos aquí.»*

Un solo párrafo centrado; después **solo grid**, sin sidebar ni cards.

---

## 2. Estructura del grid (lo esencial)

| Característica | Comportamiento en El Olivar |
|----------------|----------------------------|
| Columnas | **2 columnas 50 / 50** en desktop |
| Filas | **8 filas** = 8 beneficios |
| Alternancia | Fila 1: **imagen \| texto** — Fila 2: **texto \| imagen** — y así sucesivamente |
| Gutter | **Ninguno** visible; celdas contiguas (mosaico continuo) |
| Altura de fila | Celdas **misma altura** en la fila; imagen **full-bleed** (cubre todo el half-viewport) |
| Fondo texto | **Crema claro** (~`#FDF7F0`), distinto del blanco del header |
| Fondo imagen | Solo la foto; sin marco ni sombra |

En móvil, cada fila suele **apilarse** (imagen arriba o bloque completo ancho); El Olivar prioriza el impacto visual en desktop; nosotros replicamos el mismo orden de bloques en una columna.

---

## 3. Tipografía y copy

- **Título de beneficio:** serif/display, **centrado** en la celda crema, tamaño grande (H2 visual).
- **Descripción:** **una o dos líneas**, gris suave, centrada, tipografía sans pequeña.
- **Sin iconos** ni numeración en el grid: el título (p. ej. «Vitamina E») es el ancla.
- Los **8 títulos** en El Olivar: Vitamina E, Ácidos grasos, Vitamina A, Aumenta el colesterol HDL, Vitamina K, Propiedades antiinflamatorias, Propiedades fortalecedoras, Vitamina D.

Montechico reutiliza esos textos (adaptados) en `saludCopy` (`lib/site-content.ts`).

---

## 4. Fotografía

Cada beneficio lleva una **foto distinta**, temática pero no literal (no infografía):

1. Aceite en movimiento / dorado  
2. Aceitunas o manos + aceituna (corazón, naturaleza)  
3. Verter aceite en cocina  
4. **Running / vida activa** (colesterol / corazón)  
5. Mesa saludable  
6. Ensalada / comida fresca (digestión)  
7. Belleza / cuidado (piel, cabello)  
8. Cocina / hogar / calcio (vitamina D)

Las imágenes son **stock de alta calidad**, luminosas, horizontales. En nuestro repo: `public/salud/` (ver `ATTRIBUTION.txt`); conviene sustituir por fotos del fundo cuando existan.

---

## 5. Lo que El Olivar **no** hace en Beneficios

- No usa **bordes** entre foto y texto.  
- No encierra cada par en **max-width** centrado con mucho padding lateral.  
- No alterna **fondos grises** fila a fila con separadores.  
- No pone **línea dorada** bajo cada título en el grid (eso lo reservamos para otras secciones Montechico; en el grid Olivar el título va solo).

Nuestra implementación: `components/salud-benefit-rows.tsx` — grid ancho completo, `#fdf7f0`, sin bordes entre celdas.

---

## 6. Header de página Beneficios

- Título principal: **«Beneficios»** (H1).  
- Intro centrado debajo.  
- En el sitio de El Olivar aparece contenido placeholder («Meet Our Team») que **no forma parte** del diseño deseado del grid; ignorar para réplica.

Montechico: eyebrow **Salud**, H1 **Beneficios**, intro tipo El Olivar, luego grid pegado al ancho del viewport (`100%`).

---

## 7. Mapa a Fundo Montechico

| El Olivar | Montechico |
|-----------|------------|
| `/beneficios/` | `/salud` (menú «Salud») |
| 8 bloques imagen/texto | `saludCopy.benefits` × 8 |
| Fotos stock | `public/salud/*.jpg` |
| Crema `#FDF7F0` | Clase en `BenefitText` |
| Intro centrado | `app/salud/page.tsx` |

---

## 8. Checklist de fidelidad visual

- [ ] Dos columnas iguales en `lg+`  
- [ ] Alternancia imagen izquierda / derecha  
- [ ] Imagen sin padding, `object-cover`  
- [ ] Texto centrado vertical y horizontalmente en crema  
- [ ] Copy corto (1–2 frases)  
- [ ] Sin captions bajo fotos en el grid  
- [ ] Ancho completo (sin `max-w-6xl` en el grid)

---

## 9. Relación con otros análisis

Comparativa más amplia (Incahuasi, Olivos del Sur, El Olivar home): `docs/analisis-diseno-referencias.md`.

---

*Actualizar si cambia el diseño de elolivar.com.pe o las rutas del proyecto.*
