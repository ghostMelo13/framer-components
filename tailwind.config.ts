import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray1': '#161616',
        'gray2': '#1C1C1C',
        'gray3': '#232323',
        'gray4': '#282828',
        'gray5': '#2E2E2E',
        'gray6': '#343434',
        'gray7': '#3E3E3E',
        'gray8': '#505050',
        'gray9': '#707070',
        'gray10': '#7E7E7E',
        'gray11': '#A0A0A0',
        'gray12': '#EDEDED',
        'grayA1': 'rgba(255, 255, 255, 0)',
        'grayA2': 'rgba(255, 255, 255, 0.026)',
        'grayA3': 'rgba(255, 255, 255, 0.056)',
        'grayA4': 'rgba(255, 255, 255, 0.077)',
        'grayA5': 'rgba(255, 255, 255, 0.103)',
        'grayA6': 'rgba(255, 255, 255, 0.129)',
        'grayA7': 'rgba(255, 255, 255, 0.172)',
        'grayA8': 'rgba(255, 255, 255, 0.249)',
        'grayA9': 'rgba(255, 255, 255, 0.386)',
        'grayA10': 'rgba(255, 255, 255, 0.446)',
        'grayA11': 'rgba(255, 255, 255, 0.592)',
        'grayA12': 'rgba(255, 255, 255, 0.923)',
      }
    },
    transitionProperty: {
      'color-text-shadow': 'color, text-shadow',
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
