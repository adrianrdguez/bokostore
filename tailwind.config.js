module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        md: ['16px'],
        md1: ['18px'],
        md2: ['20px'],
        lg: ['22px'],
        lg1: ['23px'],
        lg2: ['29px'],
        xl: ['30px'],
        xl1: ['32px'],
        xl2: ['34px'],
      },
      textColor: {
        'secondary': '#9B9B9B',
        'primary': '#656565',
        'blackest': '#000000',
        'category': '#1D1D1D'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['active']
    }
  },
  plugins: [],
}
