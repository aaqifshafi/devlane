"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#dcedff',
            dark: '#ba000d',
            contrastText: '#000',
        },

    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    position: 'fixed',
                },
            },
        },
    }
}
);

export default theme;
