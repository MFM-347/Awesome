/** @type {import('tailwindcss').Config} */
export default {
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff3ff',
          100: '#dae3ff',
          200: '#beceff',
          300: '#91b0ff',
          400: '#5d86fd',
          500: '#385cfa',
          600: '#2139ef',
          700: '#1926dc',
          800: '#1b21b2',
          900: '#1c238c',
          950: '#161855',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
}
