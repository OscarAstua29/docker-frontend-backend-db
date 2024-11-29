const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  // Configuración básica para todos los archivos
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser, // Entorno navegador por defecto
      ecmaVersion: "latest", // Soporte para las últimas características de ECMAScript
      sourceType: "module", // Habilitar imports/exports de ES Modules
    },
  },
  // Configuración específica para Node.js (backend)
  {
    files: ["backend/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node, // Variables globales de Node.js
    },
    rules: {
      "no-undef": "off", // Desactiva errores para `require`, `module`, etc.
    },
  },
  // Reglas recomendadas para JavaScript
  pluginJs.configs.recommended,
  // Configuración React
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva errores por JSX sin `React` en React 17+
    },
  },
];
