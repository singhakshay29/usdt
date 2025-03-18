import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import "./index.css";
import Footer from "./Pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConatctUs from "./Pages/ConatctUs";
import TermCondition from "./Pages/TermCondition";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <Router>
    <Box sx={{ backgroundColor: "#000", overflow: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ConatctUs />} />
        <Route path="/term-condition" element={<TermCondition/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
      <Footer />
    </Box>
  </Router>
  );
}

export default App;
