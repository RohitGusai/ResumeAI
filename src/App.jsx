import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompareSection from "./components/CompareSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
   <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<CompareSection />} />
      <Route path="/features" element={<Features />} />
    </Routes>
   
    <Footer />
    </>
  );
}

export default App;