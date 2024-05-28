/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    backgroundImage: {
       'header': "url('/assets/img/headerCLOUDS.webp')",
       'footer': "url('/assets/img/FooterSmoke.webp')",
       'hero': "url('/assets/img/FooFestLogo.webp')",
       'bandMap': "url(/assets/img/CAMPMAP.webp)",
       'divider': "url(/assets/img/divider.webp)"
    },
    fontSize: {
          sm: "var(--font-size--1)",
          DEFAULT: "var(--font-size-1)",
          lg: "var(--font-size-2)",
          xl: "var(--font-size-3)",
          '2xl': "var(--font-size-4)",
          '3xl': "var(--font-size-5)",
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // https://colordesigner.io/color-scheme-builder
      // OKLCH, 15 steps
      // light etc = skip first on tint
      // dark etc = skip first two then skip 1 on shades 
      "orange": {
        lightest: "#d46e4d",
        lighter: "#ce603b",
        light: "#c85128",
        DEFAULT: "#C2410A",
        dark: "#9e3306",
        darker: "#7b2604",
        darkest:"#591902",
      },
      "green": {
        lightest: "#788763",
        lighter: "#6d7c55",
        light: "#627248",
        DEFAULT: "#586A3B",
        dark: "#45532e",
        darker: "#343f22",
        darkest:"#242d16",
      },
      "blue": {
        lightest: "#6db7de",
        lighter: "#5eb0db",
        light: "#4daad7",
        DEFAULT: "#39A2D3",
        dark: "#2d84ac",
        darker: "#216686",
        darkest:"#164a62",
      },
      "yellow": {
        lightest: "#d0aa71",
        lighter: "#cca263",
        light: "#c79b55",
        DEFAULT: "#C39448",
        dark: "#9e7737",
        darker: "#7b5c29",
        darkest:"#5a421c",
      },
      "gold": {
        lightest: "#c7a856",
        lighter: "#c2a043",
        light: "#bd982c",
        DEFAULT: "#B68E00",
        dark: "#957400",
        darker: "#745a00",
        darkest:"#544000",
      },
      "brown": {
        lightest: "#8c6248",
        lighter: "#825538",
        light: "#774828",
        DEFAULT: "#6F3B17",
        dark: "#572e11",
        darker: "#43220a",
        darkest:"#2f1605",
      },
      "white": {
        light: "#dedede",
        DEFAULT: "#D9D9D9",
        dark: "#b1b1b1",
      },
      "grey": {
        light: "#aaaaaa",
        DEFAULT: "#9B9B9B",
        dark: "#7e7e7e",
      },
      "red": {
        DEFAULT:"#b22222",
      },
      "black":{
        light: "#1B1B1B",
        DEFAULT: "#000000",
      }
    },
    extend: {
      // sm0l and bigger 
      screens: {
        'xsm': '420px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
      borderColor: {
        'gradient-start': "var(--gradient-start)",
        'gradient-end': "var(--gradient-end)",
      },
    },
  plugins: [],
},
};
