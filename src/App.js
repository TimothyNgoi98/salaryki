import './App.css';
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";
import TitleBar from "./components/TitleBar";
import NavBar from './components/NavBar';
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Box>
        <TitleBar/>
        <NavBar/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
