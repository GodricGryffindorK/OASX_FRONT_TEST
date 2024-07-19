/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'landingContentWidth': 'calc(100vw - 2px)', // Adjust this value as needed
      },
      height: {
        'landingContentWidthHeight': 'calc(100vh - 2px)', // Adjust this value as needed
      },
      backgroundImage: {
        "landingBorderGradient": 'linear-gradient(to bottom right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.1) 100%, rgba(255,255,255,0) 100%)',
      },
      spacing: {
        'building': '8rem', // Example default value
      },
      colors: {
        autoScrollBtn: 'rgba(180,180,180,1)', // Replace with your desired color code
        primary: {
          light: '#3b82f6', // Light primary color
          DEFAULT: '#20D795', // Default primary color
          dark: '#20D795', // Dark primary color
        },
      },
      screens: {
        xl: '1312px',
      },
      fontFamily: {
        sans: ['Euclid Galactic', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        carousel: ['Nothing You Could Do'],
        montserrat: ['montserrat']
      },
      margin: {
        half: "-40rem",
      }
    },
    backgroundColor: (theme) => ({
      default: "rgba(21,21,21,1)",
      landing: "rgba(39, 39, 39, 0.3)",
      landingBack: "rgb(27,27,27)",//LandingContentBackColor
      videoTimeLineBack: "rgba(217,217,217, 0.5)",  //Progressbar of Video (Back Color)
      videoTimeLineActive: "rgba(32,215,149,1)", //ProgressBar of the Video (Progress Color)
      borderTopLeft: "rgba(255,255,255,0.4)",
      borderBottomRight: "rgba(255,255,255,0,8)",
      btnBuildingBack: "rgba(128, 128, 128, 0.5)", //Building Button Background Color
      primary: '#20D795',
      secondary: 'white',
    }),
  },
  plugins: [],
}