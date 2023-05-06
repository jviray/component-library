import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../theme';

interface PanelProps {
  borderColor?: string;
  withShadow?: boolean;
  bgColor?: string;
  children: ReactNode;
  styles?: CSSProperties;
}

const Panel = ({
  borderColor = '#EAECF2',
  withShadow = false,
  bgColor = '#FFF',
  children,
  styles,
}: PanelProps) => {
  return (
    <StyledPanel {...{ style: styles, borderColor, withShadow, bgColor }}>
      {children}
    </StyledPanel>
  );
};

interface StyledPanelProps {
  borderColor: string;
  withShadow: boolean;
  bgColor: string;
}

const StyledPanel = styled.div<StyledPanelProps>`
  ${({ theme, borderColor, withShadow, bgColor }) => {
    return `
      position: relative;
      border: 1px solid ${borderColor};
      border-radius: ${theme.borderRadius};
      box-shadow: ${withShadow && '0px 61px 66px rgba(43, 31, 79, 0.07)'};
      background-color: ${bgColor};
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
