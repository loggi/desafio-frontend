import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        loggi: '#0082FF'
      }
    }
  },
  plugins: []
}
export default config
