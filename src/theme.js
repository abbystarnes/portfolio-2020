import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Helvetica',
    h1: {
      fontSize: 36,
      fontWeight: 700,
      color: '#4F689C',
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      color: '#131313',
    },
    p: {
      fontSize: 16,
    },
    a: {
      fontSize: 16,
      fontWeight: 700,
      color: '#4F689C',
    },
  },
});

// const theme = {
//   colors: {
//     neutral: 'rgba(19, 19, 19, 7)',
//     dark: '#131313',
//     accent: '#4F689C',
//   },
// };

export default theme;
