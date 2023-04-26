import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
