# Frontend Folder Structure

## Directory Overview

```
src/
├── components/
│   ├── common/           # Reusable UI components (Button, Card, Modal, etc.)
│   └── layout/           # Layout components (Header, Footer, Sidebar, Navigation)
│
├── pages/                # Page components (full page views for each route)
│   ├── HomePage.jsx
│   ├── GamePage.jsx
│   └── NotFoundPage.jsx
│
├── layouts/              # Layout wrapper components
│   ├── MainLayout.jsx
│   ├── AdminLayout.jsx
│   └── AuthLayout.jsx
│
├── hooks/                # Custom React hooks
│   ├── useLocalStorage.js
│   ├── useFetch.js
│   └── useAuth.js
│
├── services/             # API services and external integrations
│   ├── apiClient.js      # Axios/HTTP client configuration
│   ├── GameService.js    # Game API calls
│   ├── UserService.js
│   └── AuthService.js
│
├── utils/                # Helper/utility functions
│   ├── helpers.js        # String, array, object utilities
│   ├── validation.js     # Form validation functions
│   └── constants.js
│
├── config/               # Configuration files
│   ├── api.config.js     # API configuration
│   ├── app.config.js     # App settings
│   └── env.config.js
│
├── constants/            # Application constants and enums
│   ├── index.js          # Status constants, error messages, user roles
│   └── api.constants.js
│
├── types/                # TypeScript types/interfaces (if using TS)
│   └── index.js          # JSDoc type definitions
│
├── router/               # Routing configuration
│   ├── AppRoutes.jsx     # Main route definitions
│   └── routes.config.js  # Route constants and configuration
│
├── store/                # State management (Redux, Zustand, etc.)
│   ├── slices/           # Redux slices (if using Redux)
│   └── index.js
│
├── context/              # React Context for state management
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── index.js
│
├── assets/               # Static files
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/               # Global styles
│   ├── global.css
│   └── variables.css
│
├── App.jsx               # Root component
├── App.css               # Root styles
├── main.jsx              # Entry point
├── index.css             # Global CSS
└── README.md             # Frontend documentation
```

## Folder Descriptions

### `components/`
- **common**: Reusable UI components used across the app
  - Button, Card, Modal, Badge, Avatar, Loader, etc.
  - Each component should have its own folder with JSX, CSS, and tests
- **layout**: Components that structure page layouts
  - Header, Footer, Sidebar, Navigation

### `pages/`
- Full-page components corresponding to routes
- Each page combines multiple components
- Examples: HomePage, GamePage, ProfilePage

### `layouts/`
- Wrapper components for page layouts
- MainLayout, AuthLayout (for login/signup), AdminLayout

### `hooks/`
- Custom React hooks for logic reuse
- useLocalStorage, useFetch, useAuth, useForm, etc.

### `services/`
- API service files for backend communication
- Services are organized by domain (GameService, UserService, etc.)
- apiClient.js contains HTTP client setup with interceptors

### `utils/`
- Pure utility functions
- Separated by purpose: helpers.js, validation.js, etc.
- No React dependencies

### `config/`
- Configuration files for the app
- API endpoints, environment variables, app settings

### `constants/`
- Application-wide constants
- Status enums, error messages, user roles

### `types/`
- TypeScript type definitions or JSDoc types
- Interfaces for main entities (User, Game, etc.)

### `router/`
- Routing configuration and route definitions
- AppRoutes.jsx for React Router setup
- routes.config.js for route constants

### `store/`
- State management (Redux, Zustand, etc.)
- Currently includes examples for both

### `context/`
- React Context providers
- AuthContext for authentication, ThemeContext for theming

### `assets/`
- Static files: images, icons, fonts
- Organized by type

## Best Practices

1. **Component Structure**: Each component should have its own folder with `.jsx`, `.css`, and optionally `.test.js`
2. **Naming Conventions**: 
   - Components: PascalCase (HomePage.jsx)
   - Utilities: camelCase (useLocalStorage.js)
   - Constants: UPPER_CASE (API_BASE_URL)
3. **Imports**: Use index.js files for clean exports
4. **Separation of Concerns**: Keep logic (services, utils) separate from UI (components)
5. **Env Variables**: Use `.env` files and reference via `process.env.REACT_APP_*`
6. **No API calls in components**: Use services and hooks instead
7. **Don't import from parent directories**: Favor flat imports from configured paths

## Environment Setup

Create a `.env` file:
```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Spin Guess Play
```

Update `vite.config.js` to support path aliases:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
```

Then import using aliases:
```javascript
import { Button } from '@components/common'
import HomePage from '@pages/HomePage'
```
