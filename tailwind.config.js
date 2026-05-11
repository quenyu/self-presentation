/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050506",
        panel: "#0b0d10",
        line: "rgba(255, 255, 255, 0.12)",
        muted: "#9ca3af",
        signal: "#ff3131",
        cyan: "#66e7ff",
      },
      boxShadow: {
        "panel-glow": "0 0 0 1px rgba(255,255,255,0.08), 0 28px 90px rgba(0,0,0,0.45)",
        "red-glow": "0 0 34px rgba(255,49,49,0.22)",
        "cyan-glow": "0 0 36px rgba(102,231,255,0.16)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
