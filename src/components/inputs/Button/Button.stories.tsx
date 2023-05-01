import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: "I'm a button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
