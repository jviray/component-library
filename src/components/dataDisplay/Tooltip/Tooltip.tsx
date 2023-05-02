import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import defaultTheme from '../../../theme';

interface TooltipProps {
  message: ReactNode;
  placement: 'top' | 'right' | 'bottom' | 'left';
  messageBoxWidth: number;
  children: ReactNode;
}

const Tooltip = ({
  message = 'Insert message here...',
  placement = 'top',
  messageBoxWidth = 190,
  children = 'Target',
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleTooltip = () => setShowTooltip(!showTooltip);

  return (
    <StyledTooltip
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      placement={placement}
    >
      {children}
      {showTooltip && (
        <StyledMessage messageBoxWidth={messageBoxWidth} placement={placement}>
          {message}
        </StyledMessage>
      )}
    </StyledTooltip>
  );
};

interface StyledTooltipProps {
  placement: string;
}

const StyledTooltip = styled.span<StyledTooltipProps>`
  /* border: 1px solid blue; */
  position: relative;
  display: inline-block;
  user-select: none;
  padding-top: 1rem;
`;

interface StyledMessageProps
  extends Omit<TooltipProps, 'chilrden' | 'message'> {}

const StyledMessage = styled.div<StyledMessageProps>`
  position: absolute;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(103.17deg, #374055 13.12%, #1a202e 107%);
  width: ${({ messageBoxWidth }) => `${messageBoxWidth}px`};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[2]}`};
  font-size: ${({ theme }) => theme.typography.sizing[1]};
  color: ${({ theme }) => theme.palette.white};
  text-align: center;
  word-wrap: break-word;
  box-sizing: border-box;
  z-index: 1;

  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

// Set Default theme in case ThemeProvider is not used
StyledTooltip.defaultProps = {
  theme: defaultTheme,
};

export default Tooltip;
