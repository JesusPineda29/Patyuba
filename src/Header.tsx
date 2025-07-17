import  { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ImprovedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="bg-purple-500 text-white hover:bg-fuchsia-600 px-4 py-2 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition-shadow duration-5000">
              Logo
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a 
              href="#" 
              className="text-gray-700 hover:text-fuchsia-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-5000 relative group"
            >
              INICIO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 transition-all duration-5000 group-hover:w-full"></span>
            </a>
            
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('productos')}
                className="text-gray-700 hover:text-fuchsia-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-5000 flex items-center space-x-1 relative group"
              >
                <span>PRODUCTOS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-5000 ${activeDropdown === 'productos' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 transition-all duration-5000 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'productos' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Categoría 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Categoría 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Categoría 3</a>
                </div>
              )}
            </div>
            
            <a 
              href="#" 
              className="text-gray-700 hover:text-fuchsia-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-5000 relative group"
            >
              CONOCENOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 transition-all duration-5000 group-hover:w-full"></span>
            </a>
            
            <a 
              href="#" 
              className="bg-purple-500 text-white hover:bg-fuchsia-600 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-5000 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              CONTACTO
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-2">
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-5000"
              >
                INICIO
              </a>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('productos-mobile')}
                  className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-5000 flex items-center justify-between"
                >
                  <span>PRODUCTOS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-5000 ${activeDropdown === 'productos-mobile' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'productos-mobile' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Categoría 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Categoría 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Categoría 3</a>
                  </div>
                )}
              </div>
              
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-5000"
              >
                CONOCENOS
              </a>
              
              <a 
                href="#" 
                className="bg-fuchsia-800 text-white hover:bg-fuchsia-600 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-5000 text-center"
              >
                CONTACTO
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}