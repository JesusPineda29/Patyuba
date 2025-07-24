import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Datos de ejemplo para el carrusel (máximo 8 productos)
  const carouselItems = [
    { id: 1, title: "Producto 1", color: "bg-blue-400", icon: "📱" },
    { id: 2, title: "Producto 2", color: "bg-green-400", icon: "💻" },
    { id: 3, title: "Producto 3", color: "bg-purple-400", icon: "🎧" },
    { id: 4, title: "Producto 4", color: "bg-red-400", icon: "📷" },
    { id: 5, title: "Producto 5", color: "bg-yellow-400", icon: "⌚" },
    { id: 6, title: "Producto 6", color: "bg-pink-400", icon: "🖥️" },
    { id: 7, title: "Producto 7", color: "bg-indigo-400", icon: "🎮" },
    { id: 8, title: "Producto 8", color: "bg-orange-400", icon: "📺" },
  ];

  // Ajustar items por vista según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, carouselItems.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        return maxIndex; // Ir al final cuando estamos al principio
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0; // Reiniciar cuando llegamos al final
      }
      return prev + 1;
    });
  };

  // Auto-play con reinicio
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0; // Reiniciar cuando llegamos al final
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);



  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16" style={{ backgroundImage: "url('destacados.jpg')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestros Productos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos premium con la mejor calidad y diseño
          </p>
        </div>

        <div className="relative" >
          {/* Contenedor del carrusel con flechas en los lados */}
          <div className="relative overflow-hidden rounded-2xl" >
            {/* Flecha izquierda */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 hover:bg-opacity-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Flecha derecha */}
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 hover:bg-opacity-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Contenedor deslizante */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {carouselItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 p-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className={`${item.color} aspect-square rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-white group cursor-pointer`}>
                    <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-center px-4">
                      {item.title}
                    </h3>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-30 transition-all">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-blue-500 w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Indicador de progreso */}
          <div className="mt-6 flex justify-center">
            <div className="bg-gray-200 rounded-full h-1 sm:h-2 w-24 sm:w-32">
              <div 
                className="bg-blue-500 h-1 sm:h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;