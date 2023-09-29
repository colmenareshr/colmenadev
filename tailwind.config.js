/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#f4f4f4',
      gray: '#c9d1d9',
      primaryBackground: '#000000',
      secondaryBackground: '#333333',
      primaryText: '#EEEEEE',
      blue: '#0070f3',
      black: '#0a0a0a',
      yellow: '#ffbd2e',
      orange: '#fc6d26',
      purple: '#6b4fbb',
      green: '#27c93f',
      fucsia: '#de1d8d',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
