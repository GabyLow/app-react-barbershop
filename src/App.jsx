import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import AppointsPage from "./pages/AppointsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center sm:bg-cover sm:bg-center" 
    style={{ backgroundImage: 'url("./bgrnd.png")' }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/AppointsPage" element={<AppointsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

