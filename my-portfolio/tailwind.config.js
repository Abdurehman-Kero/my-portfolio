module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#000000", // Changed from "#212428" to pure black
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(90deg, #9f55ff, #7000ff)",
        "gradient-pink": "linear-gradient(135deg, #ff014f, #ff6b9d)",
        "gradient-dark-pink":
          "linear-gradient(135deg, #1e293b, #ff014f, #1e293b)",
        "gradient-shine":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
