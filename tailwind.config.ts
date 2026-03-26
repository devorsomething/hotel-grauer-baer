import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#2D5016',
          dark: '#1E3A0F',
          light: '#3D6B20',
        },
        'cream': '#FAF8F0',
        'honey': '#C8A84B',
        'honey-light': '#D4BC6A',
        'charcoal': '#2C2C2C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
