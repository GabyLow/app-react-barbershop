import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo 2.png";

export const Navbar = () => {
  const logoWidth = "200px";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-950/90">
      <div className="flex flex-col sm:flex-row justify-between font-mate-sc items-center px-4 sm:px-8 md:px-20 py-2">
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={logo} alt="Logo" style={{ width: logoWidth }} />
        </div>

        <p className="text-3xl sm:text-4xl md:text-5xl text-orange-200 ml-0 sm:ml-20 font-abc mb-4 sm:mb-0">
          ¡Una Experiencia con estilo!
        </p>

        <button
          className={`sm:hidden text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 ${
            isMenuOpen ? "bg-orange-200" : ""
          }`}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className={`w-full sm:w-auto sm:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <Link
              to="/"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 block sm:inline-block"
            >
              {" "}
              Inicio{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/BranchPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 block sm:inline-block"
            >
              {" "}
              Sucursales{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/ServicesPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 block sm:inline-block"
            >
              {" "}
              Servicios{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/AppointsPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 block sm:inline-block"
            >
              {" "}
              Citas{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


