import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My CV</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
          <a href="#services" className="hover:text-gray-300">Layanan</a>
          <a href="#contact" className="hover:text-gray-300">Kontak</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-700 p-4 flex flex-col gap-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
          <a href="#services" className="hover:text-gray-300">Layanan</a>
          <a href="#contact" className="hover:text-gray-300">Kontak</a>
        </nav>
      )}
    </header>
  );
}
