import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      beige: '#f3EDE1',

      primary: {
        '100': '#CED0E6',
        '200': '#4D577D',
        '300': '#3D4B6F',
        DEFAULT: '#333F72',
      },
      secondary: {
        '100': '#FFE18B',
        '200': '#E5A00C',
        '300': '#E58C0C',
        DEFAULT: '#E56E0c',
      },
    },

    fontSize: {
      '8xl': [
        '5rem',
        {
          lineHeight: '5rem',
          letterSpacing: '-0,0375em',
          fontWeight: '900',
        },
      ],
      '3xl': [
        '2.875rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        },
      ],
      xl: [
        '1.75rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      lg: [
        '1.5rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
      base: [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      sm: [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      xs: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '200',
        },
      ],
      caption1: [
        '1.255rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
      ],
      caption2: [
        '1.125rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      caption3: [
        '0.9375 rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      caption4: [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005em',
          fontWeight: '400',
        },
      ],
    },
    borderRadius: {
      full: '9999px',
      DEFAULT: '24px 0px', // Coin par défaut
    },
    extend: {},
  },
  plugins: [],
};
export default config;
