import 'styled-components';

interface Theme {
  palette: { [key: string]: string };
  spacing: string[];
  typography: { sizing: string[] };
  borderRadius: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
