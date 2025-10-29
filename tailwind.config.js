import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Activation du mode sombre
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Personnalisez vos couleurs ici
        primary: {
          light: "#007BFF",
          dark: "#3498DB",
        },
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        card: {
          light: "#F3F4F6",
          dark: "#1E1E1E",
        },
        text: {
          light: "#1F2937",
          dark: "#E5E7EB",
        },
        "text-secondary": {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};
