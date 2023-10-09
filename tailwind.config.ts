import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      '8xl': ['5rem', {
        lineHeight: '5rem',
        letterSpacing: '-0,0375em',
        fontWeight: '900',
      }],
      '3xl': ['2.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '600',
      }],
      'xl': ['1.75rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
      'lg': ['1.5rem', {
        lineHeight: '1.75rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
      'base': ['1.125rem', {
        lineHeight: '1.75rem',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }],
      'sm': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }],
      'xs': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '200',
      }],
      'caption1': ['1.25rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }],
      'caption2': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      'caption3': [ '0.9375 rem', {
        lineHeight: '1.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      'caption4': ['0.75rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.005em',
        fontWeight: '400',
      }],
    
    },
    extend: {},
  },
  plugins: [],
}
export default config
