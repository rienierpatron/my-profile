import { useEffect } from "react";
 
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed w-full z-40 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            rienier<span className="text-blue-500">_patron</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#work"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Work{" "}
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/fhz41sn9khl5eacqzw04i/Rienier-Santos-Patron.pdf?rlkey=yophi3ybtutiurh9jqfnhb8de&st=ihtas7ps&dl=0"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Resume{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};