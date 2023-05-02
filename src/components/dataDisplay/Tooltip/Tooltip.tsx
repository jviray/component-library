import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import defaultTheme from '../../../theme';

interface NewTooltipProps {
  message: ReactNode;
  placement: 'top' | 'right' | 'bottom' | 'left';
  children: ReactNode;
}

const NewTooltip = ({
  message = 'Insert message here...',
  placement = 'top',
  children = 'Target',
}: NewTooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleTooltip = () => setShowTooltip(!showTooltip);

  return (
    <StyledTooltip>
      <StyledTrigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </StyledTrigger>
      {showTooltip && (
        <StyledMessage placement={placement}>{message}</StyledMessage>
      )}
    </StyledTooltip>
  );
};

const StyledTooltip = styled.span`
  position: relative;
  display: inline-block;
  user-select: none;
`;

const StyledTrigger = styled.span``;

interface StyledMessageProps {
  placement: string;
}

const StyledMessage = styled.div<StyledMessageProps>`
  position: absolute;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(103.17deg, #374055 13.12%, #1a202e 107%);
  width: 160px;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[2]}`};
  font-size: ${({ theme }) => theme.typography.sizing[1]};
  color: ${({ theme }) => theme.palette.white};
  text-align: center;
  word-wrap: break-word;
  box-sizing: border-box;
  pointer-events: none;
  z-index: 1;

  bottom: 175%;
  left: 50%;
  transform: translateX(-50%);
`;

// Set Default theme in case ThemeProvider is not used
StyledTooltip.defaultProps = {
  theme: defaultTheme,
};

export default NewTooltip;
