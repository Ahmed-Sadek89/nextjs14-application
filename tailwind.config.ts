import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#0d0c22",
        customWhite: "#fff",
        customSoft: "#2d2b42",
        customTextSoft: "#e5e5e5",
        customBtnBg: "#3673fd"
      },
    },
  },
  plugins: [],
}
export default config
