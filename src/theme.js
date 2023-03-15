import { createTheme } from "@mui/material/styles";
// import TelegrafUltraBold from './fonts/Telegraf-UltraBold.woff2'

// const telegraf = {
//     fontFamily: 'Telegraf',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 700,
//     src: `
//     local('Telegraf')
//     local('Telegraf-UltraBold'),
//     url(${TelegrafUltraBold}) format('woff2')
//     `,
// };

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
        },
        subtitle1: {
            color: '#FFFFFF',
        }
        
    },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //             @font-face {
    //                 font-family: 'Telegraf';
    //                 font-style: normal;
    //                 font-display: swap;
    //                 font-weight: 700;
    //                 src: local('Telegraf'), local('Telegraf-UltraBold'), url(${TelegrafUltraBold}) format('woff2');
    //             }
    //         `
    //     }
    // }
})

export default theme