import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

        backgroundImage: {
            hero_overlay: "url('/hero/hero-overlay.png')",
          },
    },
  },
  plugins: [],
}
export default config
