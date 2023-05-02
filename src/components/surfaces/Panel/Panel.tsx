import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface PanelProps {
  children: ReactNode;
  styles?: { [key: string]: string };
}

const Panel = ({ children, styles }: PanelProps) => {
  return <StyledPanel {...{ style: styles }}>{children}</StyledPanel>;
};

const StyledPanel = styled.div`
  ${({ theme }) => {
    return `
      border: 1px solid ${theme.palette.black};
      border-radius: ${theme.borderRadius};
      background-color: ${theme.palette.white};
      width: 300px;
      min-height: 250px;
      padding: ${theme.spacing[4]};
      overflow-wrap: break-word;
    `;
  }}
`;

export default Panel;
