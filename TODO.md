# TODO — Portafolio v1.0

Pendientes antes de publicar la version 1.0 en `jmurilloch.dev`.

## Bloqueantes (no se publica sin esto)

- [ ] **Commitear `public/fancy-pants.jpg`** — el archivo esta sin trackear en git.
      `BackgroundFx.astro` lo referencia como `/fancy-pants.jpg`, asi que en un
      clone limpio o en el deploy el fondo sale roto.
      `git add public/fancy-pants.jpg`
- [ ] **Proyectos reales en `/projects`** — hoy solo hay un proyecto de ejemplo
      mas una tarjeta placeholder. Quitar el aviso "en desarrollo" cuando haya
      contenido real.
- [ ] **Revisar los enlaces de contacto** — confirmar que LinkedIn, Fiverr y
      Workana apuntan a los perfiles correctos.

## Contenido

- [ ] Capturas o imagenes por proyecto (hoy las tarjetas son solo texto).
- [ ] Mover el array `projects` de `src/components/projects/projects.astro` a una
      content collection (`src/content/`), como ya se hace con el blog.
- [ ] Decidir que pasa con `/about` y con los posts de ejemplo del blog
      (`first-post`, `second-post`, `third-post`, `markdown-style-guide`,
      `using-mdx`): publicarlos con contenido propio o borrarlos.
- [ ] `SITE_DESCRIPTION` en `src/consts.ts` sigue siendo el texto por defecto.

## Deuda tecnica

- [ ] `Footer.astro` usa `var(--color-bg-gradient)`, una variable que ya no
      existe (se borro en el commit `b75c4a8`). La declaracion `background` es
      invalida: o se elimina la linea o se le da un fondo real.
- [ ] `<main>` esta vacio en `index.astro` y `projects.astro`; el contenido va
      por fuera porque `global.css` limita `main` a 720px. `contact.astro` ya
      resuelve esto con un override local — aplicar el mismo patron.
- [ ] No hay toggle de tema. Las variables de `.whiteMode` existen en
      `global.css` pero ninguna clase la activa.
- [ ] Docker: el watcher de Vite no detecta cambios de forma fiable con el bind
      mount, y el volumen anonimo `/app/.astro` conserva el lock del dev server
      entre reinicios. Hoy la salida es `docker compose down -v && up -d`.
      Arreglo real: quitar ese volumen y activar `usePolling` en el watcher.

## Antes del deploy

- [ ] `npm run build` sin errores.
- [ ] Revisar las paginas en movil (el header oculta los iconos por debajo de 720px).
- [ ] Verificar `sitemap-index.xml` y el feed RSS.
- [ ] Revisar los meta de Open Graph / redes en `BaseHead.astro`.
