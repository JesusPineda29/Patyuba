import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SimpleCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const handleProductosClick = () => {
    navigate('/productos');
    // Hacer scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Datos de ejemplo para el carrusel (máximo 8 productos)
  const carouselItems = [
    { id: 1, title: "Moldes de Reposteria", image: "/destacados01.png" },
    { id: 2, title: "Lacas", image: "/destacados02.png" },
    { id: 3, title: "Aditivos", image: "/destacados03.png" },
    { id: 4, title: "Mejoradores de Sabor", image: "/destacados04.png" },
    { id: 5, title: "Colores Primarios", image: "/destacados05.png" },
    { id: 6, title: "Agentes de Textura", image: "/destacados06.png" },
    { id: 7, title: "Acidulantes", image: "/destacados07.png" },
    { id: 8, title: "Sabores", image: "/destacados08.png" },
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
    <div className=" p-16  h-screen bg-cover bg-center" style={{ backgroundImage: "url('/destacados.png')" }}>
      <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col justify-center">
        <div className="flex flex-col items-end text-right mb-8  lg:mb-12 pr-2 sm:pr-6 lg:pr-12">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold  " style={{ color: 'rgb(23, 99, 141)' }}>
            Productos
          </p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold " style={{ color: 'rgb(203, 6, 124)' }}>
            destacados
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#175c8d] max-w-md sm:max-w-xl">
            Descubre nuestra selección de calidad.
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
                  <div
                    className="aspect-square rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-white group cursor-pointer relative overflow-hidden"
                  >
                    {/* Fondo separado, se oscurece solo en hover */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition group-hover:brightness-65"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>

                    {/* Contenido encima */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-base sm:text-2xl font-semibold text-center px-4">
                        {item.title}
                      </h3>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">


                        <button onClick={handleProductosClick} className="bg-sky-600 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-30 transition-all">Ver más</button>
                      </div>
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
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-blue-500 w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400'
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