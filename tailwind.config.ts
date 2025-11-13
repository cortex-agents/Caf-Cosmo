import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-light': 'var(--text-light)',
        'bg-light': 'var(--bg-light)',
        'bg-dark': 'var(--bg-dark)',
        'card-bg': 'var(--card-bg)',
      },
      backgroundImage: {
        hero_overlay: "url('/hero/hero-overlay.png')",
      },
    },
  },
  plugins: [],
}
export default config
