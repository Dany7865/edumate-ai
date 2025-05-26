import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon */}
      <nav className="sm:hidden flex justify-between items-center p-2">
        <button onClick={toggleMenu} className="text-2xl">
          <FaBars />
        </button>
     
      </nav>

      {/* Sliding Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#assistant" className="hover:text-blue-600">
            Assistant
          </a>
          <a href="#footer" className="hover:text-blue-600">
            Contact
          </a>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default MobileNav;
