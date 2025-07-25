import { useState, useEffect } from 'react';

const FloatingContactWidget = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Mostrar el widget solo si hay scroll (no está en la parte superior)
      setIsVisible(scrollY > 0);
      
      const footer = document.querySelector('footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Si el footer está visible en la pantalla (con un margen de 100px)
      const footerIsVisible = footerRect.top <= windowHeight + 100;
      setIsNearFooter(footerIsVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No renderizar nada si no es visible
  if (!isVisible) return null;

  return (
    <div className={`${
      isNearFooter
        ? 'absolute bottom-6 right-6'
        : 'fixed bottom-6 right-6'
    } z-50 transition-all duration-300`}>
      <div className="w-[320px] max-w-[calc(100vw-3rem)] bg-amber-300 rounded-3xl p-6 shadow-2xl shadow-pink-100/50 animate-in slide-in-from-bottom-4 fade-in duration-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          ¿Listo para comenzar?
        </h3>
        <p className="text-sm text-gray-800 mb-4 text-center">
          Contáctanos hoy mismo y descubre todo lo que podemos hacer por ti
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/5514958244"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-2xl font-bold text-sm text-center shadow-lg hover:shadow-green-200/50 hover:scale-105 transition-all duration-300"
          >
            Chatea por WhatsApp
          </a>
          <a
            href="tel:+5558325989"
            className="bg-rose-500 text-white px-4 py-2 rounded-2xl font-bold text-sm text-center shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300"
          >
            Llamar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactWidget;