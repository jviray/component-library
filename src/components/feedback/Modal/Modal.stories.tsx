import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import Modal from './Modal';

/**
 * Default
 * Composite
 * Size
 * Color
 * TS theme
 * Defaults
 * Style prop
 * Post install portal setup
 * Fonts
 * Trigger modal with button
 */

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  args: {
    isOpen: false,
  },
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ isOpen, children }) => {
    const [_, updateArgs] = useArgs();

    const handleClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        {children}
      </Modal>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Modal',
  },
};
