import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    docs: {
      theme: themes.dark, // Define o tema dark para a documentação
    },
  },
};

export default preview;
