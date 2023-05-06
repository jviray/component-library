import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../theme';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined';
}

const Button = ({
  children,
  type = 'button',
  variant = 'contained',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton {...{ type, variant, ...rest }}>{children}</StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.palette.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;

  ${({ theme, variant }) => {
    switch (variant) {
      case 'contained':
        return `
          background: ${theme.palette.primary};
          color: ${theme.palette.white};

          :hover {
            border-color: ${theme.palette.lighterPrimary};
            background: ${theme.palette.lighterPrimary};
          }

          :active {
            border-color: ${theme.palette.darkerPrimary};
            background: ${theme.palette.darkerPrimary};
          }
        `;

      case 'outlined':
        return `
          background: ${theme.palette.white};
          color: ${theme.palette.primary};

          :hover {
            border-color: ${theme.palette.darkerPrimary};
            color: ${theme.palette.darkerPrimary};
          }

          :active {
            border-color: ${theme.palette.darkerPrimary};
            background: ${theme.palette.darkerWhite};
            color: ${theme.palette.darkerPrimary};
          }
        `;
    }
  }}
`;

// Set Default theme in case ThemeProvider is not used
StyledButton.defaultProps = {
  theme: defaultTheme,
};

export default Button;
