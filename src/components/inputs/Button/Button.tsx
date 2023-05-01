import React, { ReactNode } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../theme';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button``;

// Set Default theme in case ThemeProvider is not used
StyledButton.defaultProps = {
  theme: defaultTheme,
};

export default Button;
