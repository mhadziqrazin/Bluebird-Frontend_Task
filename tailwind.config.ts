import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#00b8d4',
        dark: '#0d5aa633',
        primary: '#2f5296',
        secondary: '#0c72b5'
      }
    }
  }
}
export default config
