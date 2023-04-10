import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
          },
        background: {
            title: '#000000',
            card: '#000000'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        h4: {
            color: '#FFFFFF'
        }
    }
})

theme.typography.h4 = {
    fontSize: '34px',
    fontWeight: 'normal',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '24px',
    }
}

theme.typography.subtitle1 = {
    fontSize: '20px',
    fontWeight: 'normal',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '11px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '14px',
    }
}

theme.typography.h6 = {
    fontSize: '22px',
    fontWeight: 'normal',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '18px',
    }
}

// theme.Box.img = {
//     width: '100px'
// }


export default theme