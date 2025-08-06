import { useNavigate } from 'react-router-dom';


const ImprovedSections = () => {
  const navigate = useNavigate();

  const handleProductosClick = () => {
    navigate('/productos');
    // Hacer scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50" id='somos'>
      {/* About Section */}
      <section className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/somos.png')" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Izquierda */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl lato-bold text-gray-800 mb-2">
                Somos
              </h2>
              <h1 className="text-9xl font-['Koulen'] text-gray-800">
                <span className="text-pink-600">PAT</span><span className="text-blue-500">YU</span><span className="text-sky-950">BA</span>
              </h1>
            </div>

            <p className=" lato-regular text-black text-justify text-xl max-w-lg">Comercializadora 100% mexicana y de raíces familiares. PATYUBA se funda por la Ingeniera Liz Patsy García Calderón en el siglo XXI, distribuyendo materias primas en todos los estados de la república desde la Ciudad de México. Nacimos para cumplir con las necesidades del cliente con soluciones, calidad, precio, servicio y confianza. Nos comprometemos a que cada materia prima que distribuimos sea el complemento ideal para su producto terminado. </p>


            <div className="flex gap-6 flex-wrap">

              


              <a href="/PATYUBA.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                DOSSIER CORPORATIVO
              </a>

            </div>
          </div>

          {/* Derecha */}
          <div className="flex flex-col items-center gap-10">
            {/* Logo */}

            <img src="/logo.png" alt="Logo" className="w-50 h-50 object-contain" />


            {/* Misión y visión */}
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
              <div className="bg-[rgb(203,6,124)] text-white p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl mb-4 text-center">MISIÓN</h3>
                <p className="text-base leading-relaxed text-center">
                  Ofrecer materias primas con la mejor calidad y rapidez, ahorrando tiempo al cliente y respondiendo de forma ágil a sus necesidades urgentes.
                </p>
              </div>
              <div className="bg-[rgb(0,79,122)] text-white p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl mb-4 text-center">VISIÓN</h3>
                <p className="text-base leading-relaxed text-center">
                  Ser la comercializadora confiable y ágil de materias primas reconocida por su respuesta inmediata, atención al cliente y altos estándares de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
<section
  className="relative min-h-[95vh] bg-cover bg-center bg-no-repeat overflow-hidden flex justify-start items-start pt-24"
  style={{ backgroundImage: "url('/catalogo.png')" }}
>
  <div className="mt-20 relative z-10 px-10 sm:px-16 md:px-24 lg:px-32">
    {/* Título */}
    <div className="flex flex-col items-center mb-8 lg:mb-12 space-y-2">
      <p
        className="text-4xl sm:text-5xl lg:text-6xl font-bold"
        style={{ color: 'rgb(23, 99, 141)' }}
      >
        Conoce nuestros
      </p>
      <p
        className="text-4xl sm:text-5xl lg:text-6xl font-bold"
        style={{ color: 'rgb(203, 6, 124)' }}
      >
        productos
      </p>
    </div>
    <div className="flex justify-center">
      <button
        onClick={handleProductosClick}
        className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
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