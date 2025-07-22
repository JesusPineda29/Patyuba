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
      bgGradient: "from-blue-600 via-purple-600 to-pink-600",
      buttonText: "Conoce nuestros productos"
    },
    {
      id: 2,
      title: "Más de 20 años",
      subtitle: "Transformando industrias",
      description: "Experiencia y confianza en cada entrega",
      highlight: "Socios estratégicos de tu éxito",
      bgGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      buttonText: "Nuestra experiencia"
    },
    {
      id: 3,
      title: "Servicio personalizado",
      subtitle: "Para cada cliente",
      description: "Soluciones adaptadas a tus necesidades",
      highlight: "Asesoría técnica especializada",
      bgGradient: "from-orange-400 via-red-400 to-rose-400",
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
    <section className="relative h-screen">
      {/* Animated background with smooth transitions */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} transition-all duration-1000 ease-in-out`}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {/* Floating circles with enhanced animations */}
            <div className="absolute top-40 right-32 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-16 left-1/2 w-28 h-28 bg-white/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1/3 left-10 w-20 h-20 bg-white/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute bottom-24 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-24 left-1/2 w-16 h-16 bg-white/25 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-white/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-1/3 right-1/2 w-16 h-16 bg-white/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute top-12 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full">
                {Array.from({ length: 48 }, (_, i) => (
                  <div key={i} className="border border-white/10"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content with sliding animations */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text content with real slide animations - SIN OVERFLOW HIDDEN */}
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

            {/* Visual element with slide animations - SIN OVERFLOW HIDDEN */}
            <div className="hidden lg:block relative">
              <div className={`relative w-full h-96 transition-all duration-700 ease-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'opacity-0 transform translate-x-full' 
                    : 'opacity-0 transform -translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`} style={{ transitionDelay: '0.1s' }}>
                {/* Animated cards with slide entrance */}
                <div className="absolute inset-0">
                  <div className={`absolute top-0 left-0 w-64 h-40 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 transform transition-all duration-700 hover:rotate-3 hover:scale-105 ${
                    isTransitioning 
                      ? direction === 'next' 
                        ? 'opacity-0 translate-x-full rotate-12' 
                        : 'opacity-0 -translate-x-full rotate-12'
                      : 'opacity-100 translate-x-0 rotate-6'
                  }`} style={{ transitionDelay: '0.15s' }}>
                    <div className="p-6">
                      <CheckCircle className="w-8 h-8 text-white/80 mb-2 animate-pulse" />
                      <p className="text-white/90 font-medium">Calidad Premium</p>
                    </div>
                  </div>
                  
                  <div className={`absolute top-20 right-0 w-64 h-40 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 transform transition-all duration-700 hover:-rotate-3 hover:scale-105 ${
                    isTransitioning 
                      ? direction === 'next' 
                        ? 'opacity-0 translate-x-full -rotate-12' 
                        : 'opacity-0 -translate-x-full -rotate-12'
                      : 'opacity-100 translate-x-0 -rotate-6'
                  }`} style={{ transitionDelay: '0.2s' }}>
                    <div className="p-6">
                      <CheckCircle className="w-8 h-8 text-white/80 mb-2 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <p className="text-white/90 font-medium">Entrega Garantizada</p>
                    </div>
                  </div>
                  
                  <div className={`absolute bottom-0 left-8 w-64 h-40 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 transform transition-all duration-700 hover:rotate-0 hover:scale-105 ${
                    isTransitioning 
                      ? direction === 'next' 
                        ? 'opacity-0 translate-x-full rotate-9' 
                        : 'opacity-0 -translate-x-full rotate-9'
                      : 'opacity-100 translate-x-0 rotate-3'
                  }`} style={{ transitionDelay: '0.25s' }}>
                    <div className="p-6">
                      <CheckCircle className="w-8 h-8 text-white/80 mb-2 animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <p className="text-white/90 font-medium">Soporte Técnico</p>
                    </div>
                  </div>
                </div>
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