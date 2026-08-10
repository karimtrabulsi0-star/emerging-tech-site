/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0F1C",
        surface: "#111A2E",
        surface2: "#182644",
        edge: "#233252",
        signal: "#5EEAD4",
        amber: "#F5A623",
        text: "#E7ECF3",
        muted: "#8592A6",
      },
      fontFamily: {
        display: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        pulse_travel: {
          "0%": { left: "0%", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": { left: "100%", opacity: 0 },
        },
        blink: {
          "0%,49%": { opacity: 1 },
          "50%,100%": { opacity: 0 },
        },
      },
      animation: {
        travel: "pulse_travel 3.5s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
