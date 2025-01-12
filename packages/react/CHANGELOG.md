# @ignite-ui/react

## 2.0.1

### Patch Changes

- Summary of Changes

  1. Release Script Adjustments
     Updated the release script in package.json to exclude the docs folder from the Turbo build process (--filter=!docs).
  2. Improvements to the TextInput Component
     Added ref support to the TextInput component using forwardRef.
     Included a default placeholder in the withPrefix story for TextInput.
     Added a size property to the TextInputContainer, with sm and md variants.
     Adjusted the styling of TextInputContainer to improve alignment and responsiveness.
  3. Adjustments to the Avatar Component
     Increased the default size of Avatar from $12 to $16.
  4. Improvements to the Box Component
     Increased the default padding from $4 to $6.
  5. Adjustments to the Button Component
     Added a focus style with box-shadow to improve accessibility.
  6. Improvements to the CheckBox Component
     Adjusted the focus style to also apply when the checkbox is checked (data-state="checked").
  7. Export of Global Styles
     Added the export of styles in the index.tsx file of the react package.
     Impact of Changes
     Improved Usability: Adjustments to the TextInput, Button, and CheckBox components aim to enhance user experience and accessibility.
     Visual Consistency: Increased sizes and spacing (Avatar, Box) to align with the design system.
     Flexibility: Added size variants to TextInput for greater customization.
     Build Optimization: Excluding the docs folder from the build process speeds up deployment.

## 2.0.0

### Major Changes

- Summary: First Release of Ignite UI Packages
  🎉 We’re launching the first version of Ignite UI packages! 🎉
  This marks the official first release of the packages on npm, kicking off a robust and well-structured library for your project. Below are the details for each package:

  @ignite-ui/eslint-config
  Change type: Major
  Description: Initial ESLint configuration for code standardization across all projects.
  Impact: Ensures development best practices and code consistency.
  @ignite-ui/react
  Change type: Major
  Description: Reusable and highly customizable React component library.
  Impact: Simplifies the creation of modern and responsive interfaces with pre-built components.
  @ignite-ui/tokens
  Change type: Major
  Description: Design tokens for colors, typography, spacing, and other styles.
  Impact: Centralizes style definitions, ensuring visual consistency across the application.
  @ignite-ui/ts-config
  Change type: Major
  Description: Initial TypeScript configuration for type safety and compilation standardization.
  Impact: Improves code safety and maintainability with static typing.
  Next Steps
  Versioning: Apply semantic versioning with npx changeset version.
  Publishing: Publish the packages to npm with npx changeset publish.
  Documentation: Update the documentation to reflect the new versions and features.
  Celebration
  🎊 This is a major milestone for the project! The packages are now ready for production use, bringing consistency, quality, and scalability to your codebase. 🚀
