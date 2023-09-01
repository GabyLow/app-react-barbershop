import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import AppointsPage from "./pages/AppointsPage";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("./bgrnd.png")' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/AppointsPage" element={<AppointsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

