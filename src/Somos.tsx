const ImprovedSections = () => {
  const handleProductosClick = () => {
    // Simular navegación - en tu aplicación real usar navigate('/productos')
    console.log('Navegando a productos...');
    // Hacer scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50" id='somos'>
      {/* About Section */}
      <section className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/somos.png')" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Izquierda */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl lato-bold text-gray-800 mb-2">
                Somos
              </h2>
              <h1 className="text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-['Koulen'] text-gray-800">
                <span className="text-pink-600">PAT</span><span className="text-blue-500">YU</span><span className="text-sky-950">BA</span>
              </h1>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="lato-regular text-black text-justify text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
                Comercializadora 100% mexicana y de raíces familiares. PATYUBA se funda por la Ingeniera Liz Patsy García Calderón en el siglo XXI, distribuyendo materias primas en todos los estados de la república desde la Ciudad de México. Nacimos para cumplir con las necesidades del cliente con soluciones, calidad, precio, servicio y confianza. Nos comprometemos a que cada materia prima que distribuimos sea el complemento ideal para su producto terminado.
              </p>
            </div>

            <div className="flex gap-4 sm:gap-6 flex-wrap">
              <a href="/PATYUBA.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                DOSSIER CORPORATIVO
              </a>
            </div>
          </div>

          {/* Derecha */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 object-contain" />

            {/* Misión y visión */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full justify-center">
              <div className="bg-[rgb(203,6,124)] text-white p-4 sm:p-6 md:p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-center">MISIÓN</h3>
                <p className="text-sm sm:text-base leading-relaxed text-center">
                  Ofrecer materias primas con la mejor calidad y rapidez, ahorrando tiempo al cliente y respondiendo de forma ágil a sus necesidades urgentes.
                </p>
              </div>
              <div className="bg-[rgb(0,79,122)] text-white p-4 sm:p-6 md:p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-center">VISIÓN</h3>
                <p className="text-sm sm:text-base leading-relaxed text-center">
                  Ser la comercializadora confiable y ágil de materias primas reconocida por su respuesta inmediata, atención al cliente y altos estándares de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section
        className="relative min-h-[95vh] bg-cover bg-center bg-no-repeat overflow-hidden flex justify-start items-start pt-16 sm:pt-20 md:pt-24"
        style={{ backgroundImage: "url('/catalogo.png')" }}
      >
        <div className="mt-12 sm:mt-16 md:mt-20 relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          {/* Título */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-12 space-y-2">
            <p
              className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center"
              style={{ color: 'rgb(23, 99, 141)' }}
            >
              Conoce nuestros
            </p>
            <p
              className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center"
              style={{ color: 'rgb(203, 6, 124)' }}
            >
              productos
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleProductosClick}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 sm:px-10 md:px-10 py-4 sm:py-5 md:py-4 rounded-full text-xl sm:text-2xl md:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Click aquí
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImprovedSections;