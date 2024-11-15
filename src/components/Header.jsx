import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="z-1 text-white py-4 px-8 font-open-sans font-normal text-[24px] leading-[33px]">
            <div className="z-1 flex justify-between items-center mx-2 md:mx-10">
              <div className='bg-white rounded-full p-2  w-20 h-20 flex items-center justify-center'>
                <Link to="/home">
                    <img src="/petlogo.svg" alt="Fetch! Pet Care" className="w-11 h-14 " />
                </Link>
                </div>
                
                {/* Botón hamburguesa para móvil */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Menú para desktop */}
                <nav className="hidden md:flex space-x-9">
                    <Link to="/location" onClick={handleNavigation} className="hover:text-gray-200">Location</Link>
                    <Link to="/blog" onClick={handleNavigation} className="hover:text-gray-200">Blog</Link>
                    <Link to="/services" onClick={handleNavigation} className="hover:text-gray-200">Services</Link>
                    <Link to="/about" onClick={handleNavigation} className="hover:text-gray-200">About Us</Link>
                    <Link to="/franchise" onClick={handleNavigation} className="hover:text-gray-200">Franchise with Us</Link>
                </nav>
            </div>

            {/* Menú móvil desplegable */}
            {isMenuOpen && (
                <nav className="md:hidden pt-4 pb-2 ">
                    <div className="flex flex-col space-y-3">
                        <Link to="/location" onClick={handleNavigation} className="hover:text-gray-200">Location</Link>
                        <Link to="/blog" onClick={handleNavigation} className="hover:text-gray-200">Blog</Link>
                        <Link to="/services" onClick={handleNavigation} className="hover:text-gray-200">Services</Link>
                        <Link to="/about" onClick={handleNavigation} className="hover:text-gray-200">About Us</Link>
                        <Link to="/franchise" onClick={handleNavigation} className="hover:text-gray-200">Franchise with Us</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;