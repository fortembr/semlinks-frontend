import { createTheme } from '@mui/material';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  components: {},
  mixins: {},
  palette: {},
  typography: {}
});
export default customTheme;
