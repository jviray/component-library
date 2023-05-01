const CRAYOLA = '#18A974';
const PITCH_BLACK = '#000000';
const LOTION = '#FAFAFA';

const BORDER_RADIUS = '10px';

interface Theme {
  palette: { [key: string]: string };
  spacing: string[];
  typography: { sizing: string[] };
  borderRadius: string;
}

export const theme: Theme = {
  palette: {
    primary: CRAYOLA,
    white: LOTION,
    black: PITCH_BLACK,
  },
  spacing: [
    '0', // 0
    '0.25rem', // 1
    '0.5rem', // 2
    '0.75rem', // 3
    '1rem', // 4
    '1.5rem', // 5
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
    '24rem',
    '32rem',
    '40rem',
    '48rem',
  ],
  typography: {
    sizing: ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px'],
  },
  borderRadius: BORDER_RADIUS,
};
