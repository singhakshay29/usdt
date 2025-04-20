import "./App.css";
import "./index.css";
import { Box } from "@mui/material";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer";
import AMLKYC from "./Pages/AML&KYC";
import Privacy from "./Pages/Privacy";
import ConatctUs from "./Pages/ConatctUs";
import Navbar from "./components/Navbar/Navbar";
import TermCondition from "./Pages/TermCondition";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", overflow: "hidden" }}>
        <Navbar />
        <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ConatctUs />} />
          <Route path="/term-condition" element={<TermCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/aml-kyc" element={<AMLKYC />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
