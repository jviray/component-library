import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../theme';

interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  borderColor?: string;
  withShadow?: boolean;
  bgColor?: string;
}

const Panel = ({
  borderColor = '#EAECF2',
  withShadow = false,
  bgColor = '#FFF',
  children,
  ...rest
}: PanelProps) => {
  return (
    <StyledPanel {...{ borderColor, withShadow, bgColor, ...rest }}>
      {children}
    </StyledPanel>
  );
};

const StyledPanel = styled.div<PanelProps>`
  ${({ theme, borderColor, withShadow, bgColor }) => {
    return `
      position: relative;
      border: 1px solid ${borderColor};
      border-radius: ${theme.borderRadius};
      box-shadow: ${withShadow && '0px 61px 66px rgba(43, 31, 79, 0.07)'};
      background: ${bgColor};
      padding: ${theme.spacing[4]};
      overflow-wrap: break-word;
    `;
  }}
`;

// Set Default theme in case ThemeProvider is not used
StyledPanel.defaultProps = {
  theme: defaultTheme,
};

export default Panel;
