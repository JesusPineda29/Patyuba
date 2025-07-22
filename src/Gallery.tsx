


const Gallery = () => {

  return (
    <div className="min-h-screen bg-slate-200 p-8">


      <div className="grid grid-cols-4 gap-4 auto-rows-min">

        {/* Elemento Negro (columna 1, filas 1-3) */}
        <div className="col-start-1 row-start-1 row-span-3 h-[753px] group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
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

        {/* Elemento Verde (columnas 2-4, fila 1) */}
        <div className="col-start-2 col-span-3 h-48 group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
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

        {/* Elemento Azul (columnas 2-3, fila 2) */}
        <div className="col-start-2 col-span-2 h-80 group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
            <img src="/patyuba.png" alt="imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> 
          </div>
        </div>

        {/* Elemento Naranja (columna 4, filas 2-3) */}

        <div className="col-start-4 row-start-2 row-span-2 h-[545px] group cursor-pointer">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-3xl">
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

        {/* Elemento Rojo (columnas 2-3, fila 3) */}
        <div className="col-start-2 col-span-2 row-start-3 h-48 group cursor-pointer">
          <div className="relative w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
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