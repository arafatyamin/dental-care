/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: '#19C0D3',
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },

    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
