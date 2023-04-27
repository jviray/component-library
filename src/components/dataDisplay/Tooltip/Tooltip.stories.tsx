import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    message: 'Insert message',
    placement: 'top',
    messageBoxWidth: 160,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "What's this?",
  },
};

export const Icon: Story = {
  args: {
    children: (
      <img src="/info-icon.svg" alt="info-icon" style={{ display: 'block' }} />
    ),
  },
};