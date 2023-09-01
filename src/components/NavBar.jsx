import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-zinc-950 to-stone-950">
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <ul className="flex">
          <li>
            <Link to="/" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Home </Link>
          </li>
          <li>
            <Link to="/AboutUsPage" className="font-bold text-white hover:text-gray-400 px-4 py-2"> About Us </Link>
          </li>
          <li>
            <Link to="/ServicesPage" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Services </Link>
          </li>
          <li>
            <Link to="/AppointsPage" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Appoints </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
