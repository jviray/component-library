import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

// Contained, Outlined, Text, Link
// Round
// Sizes: Large, Normal, Small, XSmall
// Block level
// Active and disabled
