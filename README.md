# HorseWriter Blog

Blog personal de Alex Mejía, ghostwriter especializado en contenido inmobiliario y corporativo.

## 🚀 Características

- **Astro + MDX**: Framework moderno con soporte completo para Markdown
- **Sistema de Tags**: Organiza posts por tipo (cuento, relato, crónica, artículo)
- **Diseño Responsive**: Optimizado para desktop y móvil
- **CSS Personalizado**: Estilos minimalistas con paleta azul marino, blanco y gris claro
- **SEO Optimizado**: Meta tags y estructura semántica
- **Netlify Ready**: Listo para desplegar en Netlify

## 📝 Cómo Agregar Nuevos Posts

### 1. Crear un nuevo archivo MDX

Crea un nuevo archivo en `src/content/posts/` con el formato: `nombre-del-post.mdx`

### 2. Agregar el frontmatter

Cada post debe comenzar con el siguiente frontmatter:

```yaml
---
title: "Título del Post"
description: "Descripción breve que aparecerá en las previews"
pubDate: 2024-08-07  # Formato: YYYY-MM-DD
author: "Alex Mejía"
tag: "artículo"  # Opciones: cuento, relato, crónica, artículo
image: "/src/assets/images/imagen.jpg"  # Opcional
draft: false  # true para ocultar el post
---
```

### 3. Escribir el contenido

Después del frontmatter, escribe tu contenido usando Markdown:

```markdown
## Subtítulo

Párrafo normal con **texto en negrita** y *cursiva*.

> Cita destacada

- Lista con viñetas
- Segundo elemento

[Enlace a sitio web](https://ejemplo.com)
```

### 4. Guardar y hacer commit

```bash
git add .
git commit -m "Nuevo post: Título del post"
git push origin main
```

El post aparecerá automáticamente en el sitio después del despliegue.

## 🎨 Personalización

### Colores

Los colores principales están definidos en `public/styles.css` usando variables CSS:

- `--navy`: #1e3a8a (azul marino principal)
- `--navy-dark`: #1e40af (azul marino oscuro)
- `--navy-light`: #3b82f6 (azul marino claro)
- `--gray-light`: #f8fafc (gris claro)
- `--gray-medium`: #e2e8f0 (gris medio)

### Imágenes

Coloca nuevas imágenes en `src/assets/images/` y referencialas en los posts como:
```
image: "/src/assets/images/mi-imagen.jpg"
```

### Información Personal

Actualiza tu información en:
- `src/layouts/BaseLayout.astro` (footer)
- `src/pages/about.astro` (página sobre mí)
- `src/pages/index.astro` (página principal)

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Build para producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🚀 Despliegue en Netlify

### Opción 1: Drag & Drop

1. Ejecuta `npm run build`
2. Arrastra la carpeta `dist/` a Netlify
3. ¡Listo!

### Opción 2: Git Integration

1. Sube el código a GitHub
2. Conecta el repositorio en Netlify
3. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Netlify desplegará automáticamente cada vez que hagas push

## 📁 Estructura del Proyecto

```
horsewriter-blog/
├── src/
│   ├── assets/images/          # Imágenes del sitio
│   ├── components/             # Componentes reutilizables
│   ├── content/
│   │   ├── config.ts          # Configuración de content collections
│   │   └── posts/             # Posts en formato MDX
│   ├── layouts/
│   │   └── BaseLayout.astro   # Layout principal
│   └── pages/
│       ├── index.astro        # Página principal
│       ├── about.astro        # Página sobre mí
│       └── posts/
│           ├── index.astro    # Lista de posts
│           └── [...slug].astro # Páginas individuales de posts
├── public/                     # Archivos estáticos
└── astro.config.mjs           # Configuración de Astro
```

## 💡 Tips para Escribir

### Tags Recomendados

- **artículo**: Contenido informativo, reflexiones profesionales
- **cuento**: Ficción corta, narrativas imaginativas  
- **relato**: Experiencias personales, anécdotas reales
- **crónica**: Reportajes, análisis de eventos

### Mejores Prácticas

1. **Títulos atractivos**: Usa números, preguntas o promesas
2. **Descripciones claras**: Resume el valor del post en 1-2 líneas
3. **Imágenes relevantes**: Usa imágenes que complementen el contenido
4. **Estructura clara**: Usa subtítulos (##) para organizar el contenido
5. **Call to action**: Termina con una invitación a la acción

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación de [Astro](https://docs.astro.build)
2. Consulta la guía de [MDX](https://mdxjs.com/docs/)
3. Contacta al desarrollador: [alex@horsewriter.com]

---

**¡Feliz escritura! 🖋️**

