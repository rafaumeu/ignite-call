<div align="center">

# Ignite Design System

[![Package Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)](https://github.com/rafaumeu/design-system)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A comprehensive Design System built with modern technologies during the Rocketseat Ignite program, powered by Turborepo for efficient monorepo management.

[Packages](#-packages) •
[Installation](#-installation) •
[Usage](#-usage) •
[Development](#-development)

</div>

## 📦 Packages

The project is organized into five main packages:

- `@ignite-ui/react`: Core React components built with Stitches
- `@ignite-ui/tokens`: Design tokens and theme constants
- `@ignite-ui/eslint-config`: Shared ESLint configurations
- `@ignite-ui/ts-config`: Shared TypeScript configurations
- `@ignite-ui/docs`: Storybook documentation with MDX support

## 🚀 Installation

```bash
# Install all dependencies
yarn install

# Build all packages
yarn build

# Start development environment
yarn dev
```

## 🏗️ Turborepo Setup

This project uses Turborepo to manage the monorepo architecture, providing:

- Optimized build system with caching
- Intelligent task scheduling
- Parallel execution
- Dependency graph management
- Shared configuration across packages

The Turborepo configuration can be found in:

- `turbo.json` in the root directory
- `packageManager` field in root `package.json`

## 📚 Package Details

### @ignite-ui/tokens

Contains the fundamental design tokens:

- Colors
- Typography (families, sizes, weights, and line heights)
- Spacing scale
- Border radius (radii)

### @ignite-ui/react

React component library built using:

- Stitches for styled components
- Design tokens from @ignite-ui/tokens
- Full TypeScript support

### @ignite-ui/docs

Storybook documentation featuring:

- MDX support for rich documentation
- TokensGrid component for displaying design tokens
- Interactive component documentation
- Google Fonts integration (Roboto 400, 500, 700)
- Vite-powered build system

### @ignite-ui/eslint-config

Shared ESLint rules to maintain code consistency.

### @ignite-ui/ts-config

Shared TypeScript configurations:

- `base.json`: Base configuration for all packages
- `react.json`: React-specific configuration

## 📁 Project Structure

```plaintext
.
├── packages/
│   ├── docs/              # Storybook documentation
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── TokensGrid.tsx
│   │   │   ├── pages/
│   │   │   │   └── tokens/
│   │   │   └── stories/
│   │   ├── .storybook/
│   │   └── package.json
│   │
│   ├── eslint-config/    # ESLint configurations
│   │   ├── index.cjs
│   │   └── package.json
│   │
│   ├── react/           # React components
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── tokens/          # Design Tokens
│   │   ├── src/
│   │   │   ├── colors.ts
│   │   │   ├── fonts.ts
│   │   │   ├── font-sizes.ts
│   │   │   ├── font-weights.ts
│   │   │   ├── line-heights.ts
│   │   │   ├── radii.ts
│   │   │   ├── space.ts
│   │   │   └── index.ts
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ts-config/       # TypeScript configurations
│       ├── base.json
│       ├── react.json
│       └── package.json
│
├── turbo.json          # Turborepo configuration
├── package.json        # Root package.json
└── yarn.lock
```

## 🔧 Development

### Prerequisites

- Node.js >= 16
- Yarn >= 1.22

### Setup

```bash
# Install dependencies
yarn install

# Build all packages
yarn turbo run build

# Run lint across all packages
yarn turbo run lint

# Start Storybook documentation
yarn turbo run dev
```

### Working with Packages

```bash
# Build a specific package
yarn workspace @ignite-ui/tokens build

# Run Storybook documentation
yarn workspace @ignite-ui/docs dev

# Add a dependency to a specific package
yarn workspace @ignite-ui/react add dependency-name
```

### Publishing

```bash
# Create a new version
yarn version

# Publish packages
yarn publish
```

## 💡 Usage

### Installing in Your Project

```bash
# Install the design system
yarn add @ignite-ui/react @ignite-ui/tokens

# or using npm
npm install @ignite-ui/react @ignite-ui/tokens
```

### Basic Usage

```typescript
import { colors, fontSizes } from '@ignite-ui/tokens'
import { Button } from '@ignite-ui/react'

// Using tokens
const style = {
  color: colors.primary,
  fontSize: fontSizes.md
}

// Using components
function App() {
  return <Button>Click me</Button>
}
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactors
- `test:` Test updates
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

 <img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">
</p>
<h3 align="center">Built with 💜 by Rafael Zendron</h3>
<p align="center">
  <a href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/rafaumeu">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</div>
