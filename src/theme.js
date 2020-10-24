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
      color: '#fff',
    },
    p: {
      fontSize: 16,
    },
  },
});

export default theme;
