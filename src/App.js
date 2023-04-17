import './App.css';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
// import TitleBar from "./components/TitleBar";
// import NavBar from './components/NavBar';
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import NotFound from './pages/notFound'
import ReactGA from "react-ga4"

function App() {
  ReactGA.initialize("G-3KY9QVJ1DP");
  
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
