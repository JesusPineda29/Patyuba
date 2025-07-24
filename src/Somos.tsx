
import { ChevronRight } from 'lucide-react';

const ImprovedSections = () => {
  return (
    <div className="min-h-screen bg-gray-50" id='somos'>
      {/* About Section */}
      <section className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/somos.png')" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Izquierda */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold text-gray-800 mb-2">
                Somos
              </h1>
              <h2 className="text-6xl font-bold text-gray-800">
                <span className="text-pink-600">PAT</span><span className="text-blue-500">YU</span><span className="text-sky-950">BA</span>
              </h2>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Comercializadora mexicana que busca ofrecerte la mejor calidad en productos dentro de la rama alimenticia.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Descubre más
              </button>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                DOSSIER CORPORATIVO
              </button>
            </div>
          </div>

          {/* Derecha */}
          <div className="flex flex-col items-center gap-10">
            {/* Logo */}

            <img src="/logo.png" alt="Logo" className="w-50 h-50 object-contain" />


            {/* Misión y visión */}
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
              <div className="bg-pink-700 text-white p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl mb-4 text-center">MISIÓN</h3>
                <p className="text-base leading-relaxed text-center">
                  Ofrecer materias primas con la mejor calidad y rapidez, ahorrando tiempo al cliente y respondiendo de forma ágil a sus necesidades urgentes.
                </p>
              </div>
              <div className="bg-sky-900 text-white p-8 rounded-2xl w-full md:w-1/2 shadow-xl transform hover:scale-105 transition-transform duration-300">
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
   <section className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center" 
             style={{ backgroundImage: "url('/catalogo.png')" }}>
      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="relative z-10 text-center px-6 ">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 max-w-4xl mx-auto leading-tight">
          CONOCE NUESTRO CATÁLOGO DE PRODUCTOS
        </h2>
        
        {/* Botón */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          Click aquí
        </button>
      </div>
    </section>
    </div>
  );
};

export default ImprovedSections;