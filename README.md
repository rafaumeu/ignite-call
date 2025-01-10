<div align="center">

# Ignite Design System

[![Package Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)](https://github.com/rafaumeu/design-system)
[![Monorepo](https://img.shields.io/badge/Monorepo-Yarn%20Workspaces-2C8EBB?style=for-the-badge&logo=yarn)](https://github.com/rafaumeu/design-system)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A comprehensive Design System built with modern technologies during the Rocketseat Ignite program

[Packages](#-packages) •
[Installation](#-installation) •
[Usage](#-usage) •
[Development](#-development)

</div>

## 📦 Packages

The project is organized into four main packages:

- `@ignite-ui/react`: Core React components
- `@ignite-ui/tokens`: Design tokens and theme constants
- `@ignite-ui/eslint-config`: Shared ESLint configurations
- `@ignite-ui/ts-config`: Shared TypeScript configurations

## 🚀 Installation

```bash
# Install all dependencies
yarn install

# Build all packages
yarn build
```

## 📚 Package Details

### @ignite-ui/tokens

Contains the fundamental design tokens:

- Colors
- Typography (families, sizes, and weights)
- Spacing scale
- Border radius (radii)

### @ignite-ui/react

React component library built using the design tokens.

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
│   ├── eslint-config/      # ESLint configurations
│   │   ├── index.cjs
│   │   └── package.json
│   │
│   ├── react/             # React components
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── tokens/            # Design Tokens
│   │   ├── src/
│   │   │   ├── colors.ts
│   │   │   ├── fonts.ts
│   │   │   ├── font-sizes.ts
│   │   │   ├── font-weights.ts
│   │   │   ├── radii.ts
│   │   │   ├── space.ts
│   │   │   └── index.ts
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ts-config/         # TypeScript configurations
│       ├── base.json
│       ├── react.json
│       └── package.json
│
├── package.json           # Root package.json
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
yarn build

# Run lint across all packages
yarn lint
```

### Working with Packages

```bash
# Build a specific package
yarn workspace @ignite-ui/tokens build

# Run tests for a specific package
yarn workspace @ignite-ui/react test

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
