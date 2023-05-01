import React from 'react';
import { Preview, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
