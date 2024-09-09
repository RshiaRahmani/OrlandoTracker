import { useState } from 'react';
import logo from '../../assets/images/basic.png';
import hamburger from '../../assets/images/icons/more.png';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-white flex justify-between items-center p-4 px-10">
            {/* Logo */}
            <div className="flex items-center">
                <img className="w-36" src={logo} alt="Logo" />
            </div>

            {/* Menu for larger screens */}
            <ul className="hidden md:flex space-x-6">
                <li className="hover:text-gray-400 cursor-pointer">Home</li>
                <li className="hover:text-gray-400 cursor-pointer">Inventory</li>
                <li className="hover:text-gray-400 cursor-pointer">Event</li>
                <li className="hover:text-gray-400 cursor-pointer">indeed</li>
            </ul>

            {/* Hamburger Menu for mobile */}
            <div className={`md:hidden ${isOpen ? 'hidden' : ''}`}>
                <button onClick={toggleMenu} className='hover:border-orange-900'>
                    {isOpen ? <h5>y</h5> : <img src={hamburger} className='w-5 invert'></img>}
                </button>
            </div>

            {/* Sidebar Menu for mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-full  z-20 text-white transition-transform transform ${
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
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Inventory</li>
                    <li className="hover:text-gray-400 cursor-pointer">Event</li>
                    <li className="hover:text-gray-400 cursor-pointer">indeed</li>
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