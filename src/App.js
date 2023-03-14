import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import TitleBar from "./components/TitleBar";
import NavBar from './components/NavBar';
import HeaderSalaryRights from './components/HeaderSalaryRights';
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <TitleBar/>
      <NavBar/>
      <HeaderSalaryRights/>
    </ThemeProvider>
  );
}

export default App;
