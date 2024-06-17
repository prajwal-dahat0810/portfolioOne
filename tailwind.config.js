/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        semal: "rgba(67, 67, 237, 0.2);",
        pedal: "rgb(49, 157, 255);",
        primeBlack: "#000212",
        predel: "bg-gradient-to-b from-white to-transparent",
      },
      fontFamily: { swns: ["Helvetica", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
