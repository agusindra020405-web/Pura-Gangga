import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mengubah background navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center font-varela">
        
        <div className={`text-2xl font-bold tracking-wide transition-colors ${
          isScrolled ? "text-black-600" : "text-white "
        }`}>
          Pura Yeh Gangga
        </div>

        <ul className={`hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest transition-colors ${
          isScrolled ? "text-gray-700" : "text-white/90"
        }`}>
          <li><a href="/#about" className="hover:text-orange-500 transition">Tentang Pura</a></li>
          <li><a href="/#story" className="hover:text-orange-500 transition">Cerita</a></li>
          <li><a href="/#book" className="hover:text-orange-500 transition">Buku</a></li>
          <li><a href="/#artikel" className="hover:text-orange-500 transition">Artikel</a></li>
          <li><a href="/#contact" className="hover:text-orange-500 transition">Lokasi</a></li>
        </ul>

        {/* Tombol Mobile (Hamburger) */}
        <div className="md:hidden">
          <button className={isScrolled ? "text-black" : "text-white"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;