import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./app/navbar/Navbar";
import { LandingPage } from "./app/Main/LandingPage";
import AboutPage from "./app/Main/About";
import { GalleryPage } from "./app/Main/Galeri";
import Login from "./app/Auth/Login"; 
import SignUp from "./app/Auth/SignUp"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
