import { useState, useEffect } from 'react';

const FloatingContactWidget = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 0);

      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const footerIsVisible = footerRect.top <= windowHeight + 100;
      setIsNearFooter(footerIsVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${
        isNearFooter ? 'absolute bottom-4 right-4' : 'fixed bottom-4 right-4'
      } z-50 transition-all duration-300`}
    >
      {/* ⭐ Estrellas flotantes (fuera del contenedor) */}
      <img
        src="star.png"
        alt="Decoración estrellas"
        className="absolute -top-6 -left-6 w-20 pointer-events-none select-none z-10"
      />

      <div className="w-[240px] max-w-[calc(100vw-2rem)] bg-[rgb(14,78,134)] rounded-2xl p-4 shadow-lg animate-in slide-in-from-bottom-4 fade-in duration-500 relative z-0">
        <h3 className="text-lg lato-bold text-white text-center">
          ¡Contáctanos!
        </h3>
        <p className=" lato-regular text-white mb-3 text-center">
          Estamos para servirte.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/5514958244"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(0,169,100)] text-white  py-1.5 rounded-xl lato-regular text-center shadow hover:shadow-green-200/50 hover:scale-105 transition-all duration-300"
          >
            Chatea por WhatsApp
          </a>
          <a
            href="tel:+5514958244"
            className="bg-[rgb(191,62,62)] text-white  py-1.5 rounded-xl lato-regular text-center shadow hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300"
          >
            Llamar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactWidget;
