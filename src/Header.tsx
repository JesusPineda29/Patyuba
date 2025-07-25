import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const PatyubaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar modal al hacer clic fuera
useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const target = (event.target as HTMLElement);
    if (
      isMenuOpen &&
      !target.closest('.mobile-nav') &&
      !target.closest('.menu-button')
    ) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('touchstart', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
  };
}, [isMenuOpen]);


  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'CONOCENOS', href: '#somos' },
    { name: 'CONTACTO', href: '#contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/20'
        : 'bg-transparent'
      }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">

          {/* Logo completamente a la izquierda */}
          <div
            className="flex items-center space-x-4 group cursor-pointer"
            onClick={() => {
              const target = document.getElementById("inicio");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img
              src="/logo.png"
              alt="Logo Patyuba"
              className="w-14 h-14 object-contain rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-left">
              <div
                className={`text-base font-bold transition-all duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent`}
              >
                COMERCIALIZADORA
              </div>
              <div
                className={`text-2xl font-black transition-all duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent`}
              >
                PATYUBA
              </div>
            </div>
          </div>

          {/* Menú desktop y botón hamburguesa a la derecha */}
          <div className="flex items-center gap-4">
            {/* Menú desktop */}
            <div className="hidden md:flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full overflow-hidden group ${isScrolled
                      ? 'text-gray-700 hover:text-white hover:bg-purple-600'
                      : 'text-white/90 hover:text-white hover:bg-purple-600'
                    }`}
                >
                  <span className="relative z-10 group-hover:drop-shadow-sm text-lg md:text-xl font-bold">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Botón hamburguesa (mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`menu-button p-3 rounded-full transition-all duration-300 ${isScrolled
                    ? 'text-gray-700 hover:bg-purple-100'
                    : 'text-white hover:bg-white/20'
                  } hover:scale-110 backdrop-blur-sm`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className={`mobile-nav px-2 pt-2 pb-6 space-y-1 ${isScrolled ? 'bg-white/95' : 'bg-black/20'
            } backdrop-blur-md rounded-2xl mt-2 border border-white/10`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl overflow-hidden relative group ${isScrolled
                    ? 'text-gray-700 hover:text-white hover:bg-purple-600'
                    : 'text-white/90 hover:text-white hover:bg-purple-600'
                  }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 text-lg font-bold">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
    </nav>
  );
};

export default PatyubaNavbar;