import './App.css';
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";
import TitleBar from "./components/TitleBar";
import NavBar from './components/NavBar';
import HeaderSalaryRights from './components/HeaderSalaryRights';
import EmploymentRightsSection from './components/EmploymentRightsSection';
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Box>
        <TitleBar/>
        <NavBar/>
        <HeaderSalaryRights/>
        <EmploymentRightsSection/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
