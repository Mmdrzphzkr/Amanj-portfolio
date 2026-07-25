module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f23",
        secondary: "#1a1a3e",
        accent: "#6c63ff",
        accentLight: "#8b83ff",
        accentDark: "#4a42d4",
        neonGreen: "#00ff88",
        neonBlue: "#00d4ff",
        neonPink: "#ff006e",
        darkCard: "#12122b",
        darkBorder: "#2a2a5a",
      },
      fontFamily: {
        heading: ["'Orbitron'", "sans-serif"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        slideUp: "slideUp 0.6s ease-out forwards",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        typing:
          "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #6c63ff, 0 0 10px #6c63ff" },
          "100%": {
            boxShadow: "0 0 20px #6c63ff, 0 0 40px #6c63ff, 0 0 60px #6c63ff",
          },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#6c63ff" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(108, 99, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 99, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};
