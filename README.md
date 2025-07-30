🌐 Proyecto React + Vite - Portal de Servicios

Este proyecto es una plataforma web construida con React 19, Vite y TailwindCSS 4, diseñada para gestionar y mostrar servicios de forma dinámica, con navegación gestionada mediante React Router.

🚀 Tecnologías utilizadas
⚡ Vite – Herramienta de construcción rápida para proyectos modernos.
⚛️ React 19 – Librería para interfaces de usuario.
🎨 TailwindCSS 4 – Framework CSS basado en utilidades para diseño rápido.
🔀 React Router DOM 7 – Navegación y routing en React.
📝 TypeScript – Tipado estático para JavaScript (compilado en build).
🛠️ ESLint – Análisis estático para mejorar calidad del código.

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
