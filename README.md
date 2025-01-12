<div align="center">

# Ignite Design System

[![Package Version](https://img.shields.io/badge/version-2.1.0-blue?style=for-the-badge)](https://github.com/rafaumeu/ignite-call)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo)](https://github.com/rafaumeu/ignite-call)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://rafaumeu.github.io/ignite-call)

[![CI Status](https://img.shields.io/github/actions/workflow/status/rafaumeu/ignite-call/deploy-docs.yml?style=flat-square&label=CI)](https://github.com/rafaumeu/ignite-call/actions)
[![NPM Downloads](https://img.shields.io/npm/dm/@rafaumeu-ignite-ui/react?style=flat-square&color=blue)](https://www.npmjs.com/package/@rafaumeu-ignite-ui/react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@rafaumeu-ignite-ui/react?style=flat-square&label=bundle%20size)](https://bundlephobia.com/package/@rafaumeu-ignite-ui/react)
[![NPM Version](https://img.shields.io/npm/v/@rafaumeu-ignite-ui/react?style=flat-square&color=green)](https://www.npmjs.com/package/@rafaumeu-ignite-ui/react)
[![License](https://img.shields.io/github/license/rafaumeu/ignite-call?style=flat-square)](./LICENSE)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/maintenance/yes/2025?style=flat-square)](https://github.com/rafaumeu/ignite-call)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Made with Stitches](https://img.shields.io/badge/Made%20with-Stitches-black?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBmaWxsPSJub25lIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNSAxNy41LTE3LjUgMEwwIDE3LjUgMTcuNSAzNSAzNSAxNy41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+)](https://stitches.dev)

A comprehensive Design System built with modern technologies during the Rocketseat Ignite program. Features accessible components, design tokens, and extensive documentation.

[Components](#-components) •
[Installation](#-installation) •
[Documentation](#-documentation) •
[Development](#-development)

</div>

## 🎨 Components

Our React package (`@rafaumeu-ignite-ui/react`) includes the following components:

- **Layout**
  - Box (supports polymorphic `as` prop)
  - Text (with size variants)
  - Heading (with size variants)
- **Form**
  - Button (with variants and sizes)
  - TextInput (with prefix support)
  - TextArea
  - Checkbox (with Radix UI integration)
  - MultiStep
- **Data Display**
  - Avatar (with fallback)

All components are built with accessibility in mind and follow modern React best practices.

## 🚀 Installation

```bash
# Install the design system
npm install @rafaumeu-ignite-ui/react @rafaumeu-ignite-ui/tokens

# or using yarn
yarn add @rafaumeu-ignite-ui/react @rafaumeu-ignite-ui/tokens
```

## 📚 Documentation

Visit our [Storybook documentation](https://rafaumeu.github.io/ignite-call) to explore:

- Component examples and usage
- Design tokens documentation
  - Colors
  - Typography (font families, sizes, weights)
  - Spacing scale
  - Border radius (radii)
- Accessibility guidelines
- Interactive component playground

## 🎯 Features

- **Design Tokens**: Comprehensive set of design tokens for colors, typography, spacing, and more
- **Accessibility**: All components follow WCAG guidelines and include proper ARIA attributes
- **TypeScript**: Full TypeScript support with detailed type definitions
- **Modern Stack**: Built with React, Stitches, Radix UI, and other modern tools
- **Documentation**: Extensive documentation with Storybook
- **Monorepo Structure**: Organized with Turborepo for optimal development experience

## 📦 Packages

The project consists of four main packages:

### @rafaumeu-ignite-ui/tokens (v2.1.0)

- Design tokens and theme constants
- Color system
- Typography scale
- Spacing system
- Border radius tokens

### @rafaumeu-ignite-ui/react (v2.0.1)

- Core React components
- Built with Stitches
- Radix UI integration
- Fully typed components

### @rafaumeu-ignite-ui/eslint-config

- Shared ESLint configurations
- Code style rules
- Best practices enforcement

### @rafaumeu-ignite-ui/ts-config

- Shared TypeScript configurations
- Base configuration for all packages
- React-specific configuration

## 🔧 Development

### Prerequisites

- Node.js >= 16
- Yarn >= 1.22

### Setup

```bash
# Clone the repository
git clone https://github.com/rafaumeu/ignite-call.git

# Install dependencies
yarn install

# Build all packages
yarn build

# Start Storybook
yarn dev
```

### Working with Packages

```bash
# Build a specific package
yarn workspace @rafaumeu-ignite-ui/tokens build

# Run Storybook documentation locally
yarn workspace @rafaumeu-ignite-ui/docs dev

# Run linting
yarn lint

# Publish packages
yarn release
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes following our [commit convention](#commit-convention)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We follow Conventional Commits:

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

### Built with 💜 by Rafael Zendron

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-dias-zendron-528290132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rafaumeu)

</div>
