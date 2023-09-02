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
    <nav className="bg-zinc-950/80">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-20 py-2">
        <div className="flex items-center">
          <img src={logo} alt="Logo" style={{ width: logoWidth }} />
          <p className="text-5xl text-orange-200 ml-20 font-abc">
            ¡Una Experiencia con estilo!
          </p>
        </div>

        <button
          className={`sm:hidden text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2 ${
            isMenuOpen ? "bg-orange-200" : ""
          }`}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className={`sm:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <Link
              to="/"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2"
            >
              {" "}
              Inicio{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/BranchPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2"
            >
              {" "}
              Sucursales{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/ServicesPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2"
            >
              {" "}
              Servicios{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/AppointsPage"
              className="text-3xl font-bold text-orange-200 hover:text-gray-400 px-4 py-2"
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
