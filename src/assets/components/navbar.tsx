import { useState } from 'react';
import logo from '../../assets/images/basic.png';
import hamburger from '../../assets/images/icons/more.png';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-white flex justify-between items-center p-4 px-10 shadow-md bg-zinc-900 opacity-90">
            {/* Logo */}
            <div className="flex items-center">
                <img className="w-36" src={logo} alt="Logo" />
            </div>

            {/* Menu for larger screens */}
            <ul className="hidden md:flex space-x-6 p-2 rounded-lg">
  <li className="group relative">
    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
      Home
    </a>
    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </li>
  <li className="group relative">
    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
      Inventory
    </a>
    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </li>
  <li className="group relative">
    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
      Event
    </a>
    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </li>
  <li className="group relative">
    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
      Indeed
    </a>
    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </li>
</ul>




            {/* Hamburger Menu for mobile */}
            <div className={`md:hidden ${isOpen ? 'hidden' : ''}`}>
                <button onClick={toggleMenu} className='hover:border-orange-900 border-2 bg-zinc-900'>
                    {isOpen ? '' : <img src={hamburger} className='w-5 invert'></img>}
                </button>
            </div>

            {/* Sidebar Menu for mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-full z-30 text-white transition-transform transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={toggleMenu}
                >
                    <h5>x</h5>
                </button>
                <ul className="flex flex-col items-center z-30 space-y-6 mt-24">
                    <li className="hover:text-orange-500 delay transition all-ease  cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 delay transition all-ease  cursor-pointer">Inventory</li>
                    <li className="hover:text-orange-500 delay transition all-ease  cursor-pointer">Events</li>
                    <li className="hover:text-orange-500 delay transition all-ease  cursor-pointer">indeed</li>
                </ul>
            </div>

            {/* Overlay background */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-90 z-10 transition-opacity transition-transform transition duration-300 ease-in-out"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    );
}
 
export default Nav;