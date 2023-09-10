import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import AppointsPage from "./pages/AppointsPage";
import BranchPage from "./pages/BranchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center sm:bg-cover sm:bg-center" 
    style={{ backgroundImage: 'url("./bgrnd.png")' }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BranchPage" element={<BranchPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/AppointsPage" element={<AppointsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

