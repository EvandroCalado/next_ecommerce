import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";

import { withThemeByClassName } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => <Story />,

  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];
