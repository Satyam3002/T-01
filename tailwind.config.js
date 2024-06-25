// tailwind.config.js
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          customPurple: '#8064A2',
          customBlue:'#0096C8',
          customBg:'#F7F5F9',
          graydark:'#939CA3',
          lightgray:'#CED4DA',
          lightblue:'#DBEAFE',
        },
      },
    },
    plugins: [],
  };
