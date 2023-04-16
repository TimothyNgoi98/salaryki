import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
          },
        background: {
            title: '#000000',
            card: '#000000',
            cardOverTime: "#3C7DE0",
            cardHoliday: "#0AA879",
            cardRest: '#DD6610',
            cardAnnualLeave: '#8A23AD',
            cardNoticePeriod: '#6D4B38'
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
    fontWeight: '500',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '24px',
    }
}

theme.typography.h5 = {
    fontSize: '32px',
    fontWeight: '500',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
    }
}


theme.typography.subtitle1 = {
    fontSize: '22px',
    fontWeight: '500',

    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '12px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '15px',
    }
}

theme.typography.h6 = {
    fontSize: '22px',
    fontWeight: '500',
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