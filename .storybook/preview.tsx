import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import { tokens } from '../design-system/tokens'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: tokens.colors.background },
        { name: 'card', value: tokens.colors.card },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
