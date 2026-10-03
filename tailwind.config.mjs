/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: { extend: {
    colors: { ivory:'#F7F4EE', cream:'#EEE8DE', nude:'#DCCFC2', blush:'#D8C3BD', ink:'#1D1A18', cocoa:'#3B302A', line:'#D8D0C6' },
    fontFamily: { sans:['ui-sans-serif','system-ui','sans-serif'], serif:['Iowan Old Style','Palatino Linotype','Georgia','serif'] },
    maxWidth: { content:'1440px' },
    letterSpacing: { editorial:'0.18em' }
  }},
  plugins: []
};
