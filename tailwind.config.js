/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0B132B",
            50: "#F0F4F8",
            100: "#D9E2EC",
            200: "#BCCCDC",
            300: "#9FB3C8",
            400: "#627D98",
            500: "#334E68",
            600: "#243B53",
            700: "#1C2541",
            800: "#0F172A",
            900: "#0B132B",
            950: "#060A17",
          },
          gold: {
            DEFAULT: "#C5A059",
            50: "#FAF7EE",
            100: "#F4ECD6",
            200: "#E9D8A6",
            300: "#DEC477",
            400: "#D4AF37",
            500: "#C5A059",
            600: "#A8833E",
            700: "#8B6729",
            800: "#6E4E1A",
            900: "#4D350F",
          },
          ivory: {
            DEFAULT: "#FCFBF7",
            50: "#FFFFFF",
            100: "#FCFBF7",
            200: "#F8F7F2",
            300: "#F3F0E6",
            400: "#EAE5D5",
            500: "#DFD9C5",
            600: "#CBC2A6",
            700: "#A89D7F",
            800: "#7A7156",
            900: "#4F4834",
          },
        },
      },
      fontFamily: {
        urdu: ["var(--font-urdu)", "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "serif"],
        arabic: ["var(--font-arabic)", "Noto Sans Arabic", "Tajawal", "Amiri", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(11, 19, 43, 0.07), 0 4px 6px -2px rgba(11, 19, 43, 0.04)",
        card: "0 4px 20px -2px rgba(11, 19, 43, 0.08)",
        gold: "0 0 20px -3px rgba(197, 160, 89, 0.25)",
      },
    },
  },
  plugins: [],
};
