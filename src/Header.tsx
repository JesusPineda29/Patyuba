import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const PatyubaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'CONOCENOS', href: '#conocenos' },
    { name: 'CONTACTO', href: '#contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* Logo con animación */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                <div className="w-8 h-8 bg-white rounded transform rotate-45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 transform -rotate-45 scale-75"></div>
                </div>
              </div>
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>
            </div>
            
            {/* Texto del logo */}
            <div className="text-left">
              <div className={`text-lg font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent`}>
                COMERCIALIZADORA
              </div>
              <div className={`text-2xl font-black transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent`}>
                PATYUBA
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full overflow-hidden group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-white' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {/* Fondo animado en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                  
                  {/* Texto */}
                  <span className="relative z-10 group-hover:drop-shadow-sm">
                    {item.name}
                  </span>
                  
                  {/* Línea inferior animada */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-purple-100' 
                  : 'text-white hover:bg-white/20'
              } hover:scale-110 backdrop-blur-sm`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-2 pt-2 pb-6 space-y-1 ${
            isScrolled ? 'bg-white/95' : 'bg-black/20'
          } backdrop-blur-md rounded-2xl mt-2 border border-white/10`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl overflow-hidden relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-white' 
                    : 'text-white/90 hover:text-white'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                
                {/* Texto */}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
};

export default PatyubaNavbar;