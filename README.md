# 🔍 HuInspector

**Agente de IA que analiza Historias de Usuario para detectar vacíos, ambigüedades y riesgos técnicos antes del desarrollo.**

> 🎉 Desarrollado por Avianca Evolutivos Team

---

## 📋 Descripción

HuInspector es una aplicación web moderna diseñada para mejorar la calidad de las Historias de Usuario mediante análisis automatizado con IA. La herramienta identifica problemas comunes antes de que el desarrollo comience, ahorrando tiempo y reduciendo bugs.

### 🎯 Capacidades de Análisis

- **Vacíos detectados**: Identifica elementos faltantes o incompletos
- **Preguntas faltantes**: Genera interrogantes clave que deben aclararse
- **Riesgos**: Detecta posibles problemas técnicos o de implementación
- **Ambigüedades**: Señala puntos poco claros que pueden causar confusión
- **Recomendaciones técnicas**: Proporciona sugerencias de mejora y mejores prácticas

---

## 🛠️ Tecnologías

### Core
- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.2.4** - Build tool y dev server

### Styling
- **Tailwind CSS 4.1.18** - Framework CSS utility-first
- **Ant Design 6.1.1** - Componentes UI empresariales
- **Outfit Variable Font** - Tipografía personalizada

### Animations
- **Motion 12.23.26** - Animaciones declarativas
- **tw-animate-css 1.4.0** - Utilidades de animación para Tailwind

### Utilities
- **Lucide React** - Iconos modernos
- **next-themes** - Gestión de temas
- **clsx + tailwind-merge** - Gestión de clases CSS

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd huinspector

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Preview del build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

---

## 📁 Estructura del Proyecto

```
huinspector/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes, iconos, etc.
│   ├── components/     # Componentes reutilizables
│   │   ├── animate-ui/ # Componentes con animaciones
│   │   ├── animations/ # Splash screen y animaciones
│   │   ├── home/       # Componentes del home
│   │   ├── icons/      # Iconos personalizados
│   │   └── ui/         # Componentes UI base
│   ├── hooks/          # Custom React hooks
│   ├── layout/         # Layout components (navbar, footer)
│   ├── lib/            # Utilidades y helpers
│   ├── pages/          # Páginas de la aplicación
│   ├── App.tsx         # Componente raíz
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globales
├── index.html          # HTML template
├── vite.config.ts      # Configuración de Vite
├── tsconfig.json       # Configuración de TypeScript
├── postcss.config.js   # Configuración de PostCSS
└── package.json        # Dependencias y scripts
```

---

## 👥 Equipo

**Avianca Evolutivos Team**

---

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

---

**Versión Beta** - En desarrollo activo
