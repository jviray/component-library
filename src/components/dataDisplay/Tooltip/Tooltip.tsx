import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  children: ReactNode;
  message: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  messageBoxWidth: number;
}

const Tooltip = ({
  children,
  message,
  placement = 'top',
  messageBoxWidth = 160,
}: TooltipProps) => {
  return (
    <StyledToolip
      message={message}
      placement={placement}
      messageBoxWidth={messageBoxWidth}
    >
      {children}
    </StyledToolip>
  );
};

// Remove dupe w/ component and styled props!
interface StyledTooltipProps {
  message: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  messageBoxWidth: number;
}

const StyledToolip = styled.div<StyledTooltipProps>`
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
    border-radius: ${({ theme }) => (theme ? theme.borderRadius : '10px')};
    background: linear-gradient(103.17deg, #374055 13.12%, #1a202e 107%);
    width: ${({ messageBoxWidth }) => `${messageBoxWidth}px`};
    padding: ${({ theme }) =>
      theme ? `${theme.spacing[3]} ${theme.spacing[2]}` : '0.75rem 0.5rem'};
    font-size: ${({ theme }) => (theme ? theme.fontSz[1] : '14px')};
    color: ${({ theme }) => (theme ? theme.colors.white : '#FAFAFA')};
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

export default Tooltip;
