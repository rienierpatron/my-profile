export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }  
        `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }  
        `}
      >
        About
      </a>
      <a
        href="#work"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }  
        `}
      >
        Work
      </a>
      <a
        href="https://www.dropbox.com/scl/fi/fhz41sn9khl5eacqzw04i/Rienier-Santos-Patron.pdf?rlkey=yophi3ybtutiurh9jqfnhb8de&st=ihtas7ps&dl=0"
        target="_blank"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }  
        `}
      >
        Resume
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-blue-500 hover:scale-110
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }  
        `}
      >
        Contact
      </a>
    </div>
  );
};