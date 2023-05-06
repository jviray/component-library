import { Meta, StoryObj } from '@storybook/react';

import Panel from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Surfaces/Panel',
  component: Panel,
  args: {
    children: 'Panel',
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {};
