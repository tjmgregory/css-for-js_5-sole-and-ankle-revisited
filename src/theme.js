const theme = {
  breakpoints: {
    laptopAndDown: `(max-width: ${1300 / 16}rem)`,
    tabletAndDown: `(max-width: ${950 / 16}rem)`,
    phoneAndDown: `(max-width: ${600 / 16}rem)`
  },
  color: {
    white: 'hsl(0deg 0% 100%)',
    gray: {
      100: 'hsl(185deg 5% 95%)',
      300: 'hsl(190deg 5% 80%)',
      500: 'hsl(196deg 4% 60%)',
      700: 'hsl(220deg 5% 40%)',
      900: 'hsl(220deg 3% 20%)',
    },
    primary: 'hsl(340deg 65% 47%)',
    secondary: 'hsl(240deg 60% 63%)',
  },
  font: {
    weight: {
      normal: 500,
      medium: 600,
      bold: 800,
    }
  }
};

export default theme;