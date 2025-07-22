import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle} from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  
  const slides = [
    {
      id: 1,
      title: "El color que necesita,",
      subtitle: "Comercializadora PATYUBA se lo brinda",
      description: "Tu proveedor confiable de materias primas PATO",
      highlight: "Calidad y cumplimiento garantizados",
      backgroundImage: "/redhero.jpeg",
      buttonText: "Conoce nuestros productos"
    },
    {
      id: 2,
      title: "Más de 20 años",
      subtitle: "Transformando industrias",
      description: "Experiencia y confianza en cada entrega",
      highlight: "Socios estratégicos de tu éxito",
      backgroundImage: "/yellowhero.jpeg",
      buttonText: "Nuestra experiencia"
    },
    {
      id: 3,
      title: "Servicio personalizado",
      subtitle: "Para cada cliente",
      description: "Soluciones adaptadas a tus necesidades",
      highlight: "Asesoría técnica especializada",
      backgroundImage: "bluehero.jpeg",
      buttonText: "Contáctanos"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 400);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 400);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="inicio">
      {/* Background images with smooth transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            {/* Dark overlay for better text readability */}

          </div>
        ))}
      </div>

      {/* Content with sliding animations */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text content with real slide animations */}
            <div className="text-white relative">
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className={`block transition-all duration-700 ease-out ${
                  isTransitioning 
                    ? direction === 'next' 
                      ? 'opacity-0 transform translate-x-full' 
                      : 'opacity-0 transform -translate-x-full'
                    : 'opacity-100 transform translate-x-0'
                }`} style={{ transitionDelay: '0.05s' }}>
                  {slides[currentSlide].title}
                </span>
                <span className={`block text-white/90 transition-all duration-700 ease-out ${
                  isTransitioning 
                    ? direction === 'next' 
                      ? 'opacity-0 transform translate-x-full' 
                      : 'opacity-0 transform -translate-x-full'
                    : 'opacity-100 transform translate-x-0'
                }`} style={{ transitionDelay: '0.1s' }}>
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className={`text-xl text-white/90 mb-4 transition-all duration-700 ease-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'opacity-0 transform translate-x-full' 
                    : 'opacity-0 transform -translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`} style={{ transitionDelay: '0.15s' }}>
                {slides[currentSlide].description}
              </p>
              
              <p className={`text-lg text-white/80 mb-8 transition-all duration-700 ease-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'opacity-0 transform translate-x-full' 
                    : 'opacity-0 transform -translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`} style={{ transitionDelay: '0.2s' }}>
                {slides[currentSlide].highlight}
              </p>
              
              <button className={`bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-500 hover:scale-105 transform shadow-2xl hover:shadow-3xl ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'opacity-0 transform translate-x-full' 
                    : 'opacity-0 transform -translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`} style={{ transitionDelay: '0.25s' }}>
                {slides[currentSlide].buttonText}
              </button>
            </div>

            {/* Visual element with slide animations */}
            <div className="hidden lg:block relative">
              <div className={`relative w-full h-96 transition-all duration-700 ease-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'opacity-0 transform translate-x-full' 
                    : 'opacity-0 transform -translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`} style={{ transitionDelay: '0.1s' }}>
                {/* Aquí puedes agregar contenido adicional si lo necesitas */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows with enhanced hover effects */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators with enhanced animations */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Enhanced progress bar with smooth animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-white via-white/90 to-white transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;