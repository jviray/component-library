import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import { InfoIcon } from '../../../icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    message: 'Read our Convex UST Post-Mortem here',
    messageBoxWidth: 190,
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
    children: <InfoIcon display={'block'} fontSize={32} color={'#FFBC58'} />,
  },
};
