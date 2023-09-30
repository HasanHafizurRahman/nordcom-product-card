/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import containerPlugin from "@tailwindcss/container-queries";
import { tailwindConfigs } from "./plugins/tailwindConfigPlugin";
import colorThemes from './app/themes.json'

const config = {
  darkMode: ['class'],

  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  plugins: [
    animatePlugin,
    containerPlugin,
    tailwindConfigs({ colorThemes }),
  ],

} satisfies Config


export default config