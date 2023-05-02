import React, { ReactNode } from 'react';
import styled from 'styled-components';

import defaultTheme from '../../../theme';

interface TooltipProps {
  children: ReactNode;
  message: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  messageBoxWidth: number;
}

const Tooltip = ({
  children = 'Target',
  message = 'Insert message',
  placement = 'top',
  messageBoxWidth = 160,
}: TooltipProps) => {
  return (
    <StyledTooltip
      message={message}
      placement={placement}
      messageBoxWidth={messageBoxWidth}
    >
      {children}
    </StyledTooltip>
  );
};

interface StyledTooltipProps extends Omit<TooltipProps, 'chilrden'> {}

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: relative;
  display: inline-block;
  user-select: none;

  &::before {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: ${({ placement }) => {
      switch (placement) {
        case 'top':
          return 'translateY(10px)';

        case 'right':
          return 'translateX(-10px)';

        case 'bottom':
          return 'translateY(-10px)';

        case 'left':
          return 'translateX(10px)';
      }
    }};
    transition: opacity 0.3s, transform 0.2s;
  }

  --horizontal-offset: ${({ messageBoxWidth }) =>
    `calc(50% - ${messageBoxWidth / 2}px)`};

  &::before {
    ${({ placement }) => {
      switch (placement) {
        case 'top':
          return `
            bottom: 175%;
            left: var(--horizontal-offset);
          `;

        case 'right':
          return `
            bottom: -50%;
            left: calc(100% + 1.2rem);
          `;

        case 'bottom':
          return `
            top: 175%;
            right: var(--horizontal-offset);
          `;

        case 'left':
          return `
            bottom: -50%;
            right: calc(100% + 1.2rem);
          `;
      }
    }}
    content: '${({ message }) => message}';
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: linear-gradient(103.17deg, #374055 13.12%, #1a202e 107%);
    width: ${({ messageBoxWidth }) => `${messageBoxWidth}px`};
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[2]}`};
    font-size: ${({ theme }) => theme.typography.sizing[1]};
    color: ${({ theme }) => theme.palette.white};
    text-align: center;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
    transform: ${({ placement }) =>
      placement === 'top' || placement === 'bottom'
        ? `translateY(0)`
        : `translateX(0)`};
  }
`;

// Set Default theme in case ThemeProvider is not used
StyledTooltip.defaultProps = {
  theme: defaultTheme,
};

export default Tooltip;
