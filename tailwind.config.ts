import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      aino: ["aino", "sans-serif"],
      ainoBold: ["aino-bold", "sans-serif"],
      ainoBoldItalic: ["aino-bold-italic", "sans-serif"],
      ainoHeadline: ["aino-headline", "sans-serif"],
      ainoItalic: ["aino-italic", "sans-serif"]
    },
  },
  plugins: [],
}
export default config
