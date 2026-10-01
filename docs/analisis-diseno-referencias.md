# Análisis de diseño — referencias del sector

Comparativa cualitativa de **cuatro** sitios del rubro aceite de oliva / agroindustrial. Objetivo: entender **qué los hace atractivos** y qué aplicamos en Fundo Montechico.

Sitios analizados:

- [Fundo Incahuasi](https://fundoincahuasi.com/)
- [Olivos del Sur](https://olivosdelsur.com/)
- [El Olivar](https://www.elolivar.com.pe/) — [Beneficios](https://www.elolivar.com.pe/beneficios/)
- [Fundo San Antonio](https://www.fundosanantonio.com.pe/) — ficha [Aceite de oliva extra virgen](https://www.fundosanantonio.com.pe/es/products/aceite-de-oliva-extra-virgen)

---

## 1. Qué tienen en común (y por qué “enganchan”)

### Fondo blanco en el contenido

**Las cuatro webs** apoyan casi todo el contenido en **blanco** (o blanco roto muy claro), no en grises fuertes ni fondos crema en toda la página. La cabecera también suele ser clara; el contraste lo aportan:

- **Fotografía** (olivar, botella, lifestyle)
- **Tipografía** oscura o verde oliva
- **Pie o bloques** oscuros / de color (Incahuasi verde, tiendas con footers grises)

Montechico adoptó **`--background` y `--paper` en `#ffffff`** en Inicio, Catálogo, Galería y Salud; solo el **pie** y el **menú móvil** mantienen verde oliva. Detalle técnico: `docs/caracteristicas-css.md`.

### Narrativa de origen antes que de catálogo

Anclan la marca en **tierra, valle y tradición**. No abren solo con SKUs: cuentan **de dónde sale** el producto. San Antonio e Incahuasi enfatizan fundo y proceso; El Olivar y Olivos del Sur mezclan origen con lifestyle o catálogo amplio.

### Identidad visual “premium natural”

**Verdes oliva**, **blancos**, **dorados** o marrones cálidos, fotografía de olivar y producto. Serif/display en títulos, sans en cuerpo. Sensación: artesanal, limpio, exportable.

### Jerarquía clara

Menús relativamente cortos; el usuario **recorre** historia → producto → confianza → contacto (contacto a menudo en pie, no hace falta repetirlo cinco veces en el header).

### Fotografía protagonista

Hero amplio, producto grande en ficha, galerías o grids imagen–texto. El aceite **se ve** antes de leerse.

### Confianza y salud (sin tono clínico)

Beneficios en lenguaje claro (El Olivar, San Antonio en descripción de producto). Certificaciones (Olivos del Sur). Calidad y exportación (Incahuasi).

### Ritmo de scroll

Bloques alternados, aire en blanco, eyebrows en mayúsculas. **Above the fold** cuidado en móvil.

---

## 2. Fundo San Antonio — ficha de producto (referencia catálogo)

La URL de producto es el modelo que usamos en **`/catalogo`**:

| Elemento | San Antonio | Montechico |
|----------|-------------|------------|
| Migas | Franja gris clara `Productos > … > …` | `catalogProduct.breadcrumbs` + `bg-[#e8e6e2]` |
| Fondo página | Blanco | Blanco |
| Imagen producto | Grande, clic / zoom habitual en e-commerce | Lightbox al clic |
| Título | Una línea, tamaño moderado | `catalogProduct.title`, `text-xl`/`2xl` |
| Disponibilidad | “En stock” en verde | `inStockLabel`, verde `#3d7a4a` |
| Nutrición / salud | Enlace o pestañas según tienda | Botón → **`/salud`** |
| Tabla nutricional inline | A veces imagen de etiqueta | Retirada tabla manual; salud en página dedicada |

San Antonio confirma que **blanco + franja gris de migas + ficha limpia** es estándar del sector peruano premium.

---

## 3. Diferencias útiles (no copiar todo)

| Aspecto | Incahuasi | Olivos del Sur | El Olivar | San Antonio |
|--------|-----------|----------------|-----------|-------------|
| Tono | Fundo, timeline, exportación | Tienda + promos | Recetas, bienestar | Producto + fundo |
| Menú | Anclas + catálogo/galería | Muchas categorías | Beneficios, cocina | Productos, nosotros |
| Hero | Slider | Carrusel comercial | Banners | Variable |
| Salud | Recomendaciones home | Certificaciones | Grid Beneficios | En ficha / contenido |
| E-commerce | Ligero | Fuerte | Tienda virtual | Catálogo producto |

Montechico: arco **Incahuasi (home) + San Antonio (catálogo) + El Olivar (salud)**. Grid Salud: `docs/analisis-el-olivar-beneficios.md`.

---

## 4. Patrones de UI que funcionan

1. **Fondo blanco** en páginas de contenido (las 4 referencias).
2. **Eyebrow + título + línea dorada** en secciones.
3. **Slider hero** con poco texto.
4. **Menú móvil** pantalla verde (Incahuasi / Montechico).
5. **Galería + lightbox**.
6. **Grid imagen | texto** (Beneficios / Salud).
7. **Mapa embebido** (origen real).
8. **Migas grises** en producto (San Antonio).
9. **Pie oscuro** con contacto y redes.

---

## 5. Aplicación en Fundo Montechico

| Referencia | Implementación |
|------------|----------------|
| Home Incahuasi | `/` — `#historia`, `#ubicacion`, `#video` |
| Producto San Antonio | `/catalogo` — migas, stock verde, lightbox |
| Beneficios El Olivar | `/salud` — 8 filas, crema solo en celdas texto |
| Galería Incahuasi | `/galeria` + lightbox |
| Blanco global | `globals.css` — `#ffffff` |
| Menú | Inicio, Catálogo \| Galería, Salud — contacto en **pie** |

---

## 6. Conclusión

Lo que hace **atractivas** a estas cuatro webs no es un efecto puntual: es **coherencia** (origen, calidad, blanco, fotos grandes) y **confianza** (contacto, salud, proceso). El **blanco compartido** es el hilo que une Incahuasi, Olivos del Sur, El Olivar y Fundo San Antonio; Montechico lo unificó en las cuatro vistas principales y reserva color fuerte para pie y menú móvil.

---

*Documento interno. CSS detallado: `caracteristicas-css.md`.*
