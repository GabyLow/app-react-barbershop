import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BranchOnePage from "./pages/BranchOnePage";
import BranchTwoPage from "./pages/BranchTwoPage";
import AppointsInfoPage from "./pages/AppointsInfoPage";


function App() {

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/BranchOne" element={<BranchOnePage />}></Route>
            <Route path="/BranchTwo" element={<BranchTwoPage />}></Route>
            <Route path="/AppointInfo" element={<AppointsInfoPage />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
