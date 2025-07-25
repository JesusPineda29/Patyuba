const Gallery = () => {
  return (
    <div className="min-h-screen bg-slate-200 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        {/* Elemento Negro */}
        <div className="h-[300px] md:col-start-1 md:row-start-1 md:row-span-3 md:h-[753px] group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
            <img src="/pizar.jpeg" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Elegancia Oscura</h3>
                <p className="text-white text-sm">Minimalismo sofisticado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento Verde */}
        <div className="h-48 md:col-start-2 md:col-span-3 group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
            <img src="/verdesito.jpg" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Naturaleza Vibrante</h3>
                <p className="text-white/80 text-sm">Explorando paisajes únicos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento Azul */}
        <div className="h-80 md:col-start-2 md:col-span-2 group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
            <img src="/patyuba.png" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Elemento Naranja */}
        <div className="h-[300px] md:col-start-4 md:row-start-2 md:row-span-2 md:h-[545px] group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-3xl">
            <img src="/sombrasc.jpg" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Atardecer Cálido</h3>
                <p className="text-white/80 text-sm">Colores que inspiran</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento Rojo */}
        <div className="h-48 md:col-start-2 md:col-span-2 md:row-start-3 group cursor-pointer">
          <div className="relative w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
            <img src="/rosad.jpg" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Pasión Ardiente</h3>
                <p className="text-white/80 text-sm">Emociones intensas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
