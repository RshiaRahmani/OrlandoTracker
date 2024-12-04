import { useEffect, useState } from "react";
import logo from "../../assets/images/basic.svg";
import searchicon from "../../assets/images/icons/search.svg";
import hamburger from "../../assets/images/icons/more.png";
import { Link } from "react-router-dom";
const Nav = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  // Add scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`text-white flex justify-between items-center p-4 px-10 z-50  ${navbarScrolled ? 'bg-zinc-800 bg-opacity-80 shadow-md' : ''} ${isOpen ? `` : `backdrop-blur-md`} fixed w-screen transition transition ease-in-out duration-500`} >
      {/* Logo */}
      <div className="flex items-center">
        <Link to={"/orlandotracker/"}>
        <img className="w-36" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Menu for larger screens */}
      <ul className={`hidden md:flex  space-x-6 p-1 rounded-lg`}>
        <li className="group relative">
          <Link
            to="/OrlandoTracker/"
            className={`${navbarScrolled ? 'text-white' : 'text-zinc-800'} hover:text-gray-300 transition-colors duration-300`}
          >
            Home
          </Link>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1cc079] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="group relative">
          <Link
            to="/OrlandoTracker/inventory"
            className={`${navbarScrolled ? 'text-white' : 'text-zinc-800'} hover:text-gray-300 transition-colors duration-300`}
          >
            About us
          </Link>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1cc079] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="group relative">
          <Link
            to="/OrlandoTracker/events"
            className={`${navbarScrolled ? 'text-white' : 'text-zinc-800'} hover:text-gray-300 transition-colors duration-300`}
          >
            Contact us
          </Link>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1cc079] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="group relative">
          <Link
            to="/OrlandoTracker/indeed"
            className={`${navbarScrolled ? 'text-white' : 'text-zinc-800'} hover:text-gray-300 transition-colors duration-300`}
          >
            Privacy policy
          </Link>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-[#1cc079] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>

      <div>
        <img src={searchicon} className={`${navbarScrolled ? '' : 'invert'} w-7 hidden md:block`}></img> 
      </div>

      {/* Hamburger Menu for mobile */}
      <div className={`md:hidden ${isOpen ? "hidden" : "invert"}`}>
        <button
          onClick={toggleMenu}
          className="border-none bg-transparent"
        >
          {isOpen ? "" : <img src={hamburger} className="w-5 invert "></img>}
        </button>
      </div>

      {/* Sidebar Menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-30 text-white  transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="bg-black/[0.9] w-screen h-screen fixed">
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <h5>x</h5>
        </button>
        <ul className="flex flex-col items-center text-white z-30 space-y-6 mt-24">
          <li className="hover:text-[#1cd183] delay transition text-white all-ease cursor-pointer"
          onClick={toggleMenu}>
            <Link to="/OrlandoTracker/">Home</Link>
          </li>
          <li className="hover:text-[#1cd183] delay transition text-white all-ease cursor-pointer"
          onClick={toggleMenu}>
            <Link to="/OrlandoTracker/inventory">About us</Link>
          </li>
          <li className="hover:text-[#1cd183] delay transition text-white all-ease cursor-pointer"
          onClick={toggleMenu}>
            <Link to="/OrlandoTracker/events">Contact us</Link>
          </li>
          <li className="hover:text-[#1cd183] delay transition text-white all-ease cursor-pointer"
          onClick={toggleMenu}>
            <Link to="/OrlandoTracker/indeed">Privacy policy</Link>
          </li>
        </ul>
        </div>
      </div>

      {/* Overlay background */}
      {/* <div
  className={`fixed inset-0 bg-black z-20 transition-opacity duration-300 ease-in-out ${
    isOpen ? "opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  onClick={toggleMenu}
></div> */}
    </nav>
  );
};

export default Nav;
