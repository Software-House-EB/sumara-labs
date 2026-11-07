/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shakuro: {
          bg: '#ffffff',
          dark: '#0c0d10',
          darker: '#08080a',
          text: '#0f0f11',
          muted: '#5e5e66',
          subtle: '#8e8e93',
          border: '#e8e8ed',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
          primary: '#1649FF',
          blue: '#1649FF',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Poppins', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
      },
      letterSpacing: {
        'tight-3': '-3px',
        'tight-2': '-2px',
        'tight-1': '-1px',
      },
      maxWidth: {
        '1408': '1408px',
        '1760': '1760px',
      },
    },
  },
  plugins: [],
};
