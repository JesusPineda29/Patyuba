import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatyubaNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (href: string) => {
    if (href === '/#somos' || href === '/#contacto') {
      // Si estamos en la página principal, hacer scroll a la sección
      if (location.pathname === '/') {
        const sectionId = href.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // h-20 = 5rem = 80px
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Si estamos en otra página, navegar a la página principal y luego hacer scroll
        navigate('/');
        setTimeout(() => {
          const sectionId = href.split('#')[1];
          const element = document.getElementById(sectionId);
          if (element) {
            const navbarHeight = 80;
            const elementPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else {
      // Para otros enlaces, navegar y hacer scroll al inicio
      navigate(href);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

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
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;

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
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'CONOCENOS', href: '/#somos' },
    { name: 'CONTACTO', href: '/#contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
      ? 'bg-gradient-to-l from-fuchsia-900 to-pink-700 backdrop-blur-md shadow-2xl border-b border-gray-200/20'
      : 'bg-transparent'
      }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">

          {/* Logo completamente a la izquierda */}
          <a
            href='/'
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
                className={`text-base font-bold transition-all duration-300 ${isScrolled ? "text-white" : "text-white"
                  } group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent`}
              >
                COMERCIALIZADORA
              </div>
              <div
                className={`text-2xl font-black transition-all duration-300 ${isScrolled ? "text-white" : "text-white"
                  } group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent`}
              >
                PATYUBA
              </div>
            </div>
          </a>

          {/* Menú desktop y botón hamburguesa a la derecha */}
          <div className="flex items-center gap-4">
            {/* Menú desktop */}
            <div className="hidden md:flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full overflow-hidden group ${isScrolled
                    ? 'text-white hover:text-white hover:bg-blue-900'
                    : 'text-white/90 hover:text-white hover:bg-blue-900'
                    }`}
                >
                  <span className="relative z-10 group-hover:drop-shadow-sm text-lg md:text-xl font-bold">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Botón hamburguesa (mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`menu-button p-3 rounded-full transition-all duration-300 ${isScrolled
                  ? 'text-white hover:bg-purple-100'
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
          <div className={`mobile-nav px-2 pt-2 pb-6 space-y-1 ${isScrolled
            ? 'bg-white/95'
            : 'bg-gradient-to-br from-purple-900/95 to-pink-800/95'
            } backdrop-blur-md rounded-2xl mt-2 border border-white/10 shadow-xl`}>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(item.href);
                  setIsMenuOpen(false);
                }}
                className={`block w-full px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl overflow-hidden relative group ${isScrolled
                  ? 'text-gray-700 hover:text-white hover:bg-purple-600'
                  : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 text-lg font-bold">{item.name}</span>
              </button>
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