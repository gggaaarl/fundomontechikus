# Guía rápida: commit y push

Para subir cambios al repositorio **sin usar el asistente de IA** (y ahorrar créditos en tareas simples).

## Requisitos

- Git instalado
- Acceso al remoto (GitHub: `origin`)

## Pasos (PowerShell o terminal)

Desde la carpeta del proyecto:

```powershell
cd c:\Users\admin\Documents\proyectos\fundomontechikus
```

### 1. Ver qué cambió

```powershell
git status
git diff
```

### 2. Agregar archivos al commit

Solo lo que quieras subir, por ejemplo:

```powershell
git add lib/site-content.ts components/site-footer.tsx
```

O todo lo modificado:

```powershell
git add -A
```

(Revisa antes que no entren archivos sensibles como `.env`.)

### 3. Crear el commit

```powershell
git commit -m "Describe en una frase qué cambiaste y por qué"
```

Ejemplo:

```powershell
git commit -m "Actualizar teléfonos en el pie de página"
```

### 4. Subir a GitHub

```powershell
git push origin main
```

Si es la primera vez en una rama nueva:

```powershell
git push -u origin nombre-de-tu-rama
```

## Comprobar

```powershell
git status
```

Debe decir *Your branch is up to date with 'origin/main'*.

## Editar textos del sitio (sin tocar código)

Muchos datos viven en **`lib/site-content.ts`**:

- Localidad: objeto `place` (`header`, `footerLines`, `speech`)
- Teléfonos: `contact.phones`
- Instagram: `social.instagram`
- Mapa: `site.map`

Después: `git add lib/site-content.ts`, commit y push como arriba.

## Si el push pide usuario/contraseña

Usa **SSH** o un **Personal Access Token** de GitHub en lugar de la contraseña de la cuenta.
