import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadRecipe from "./Components/Upload";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ViewRecipe from "./Components/ViewRecipe";

function App() {
  return (
    <Router>
      <div className="app-container">

        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<UploadRecipe />} />
            <Route path="/viewRecipe" element={<ViewRecipe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;