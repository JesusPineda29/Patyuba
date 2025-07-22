
import { Heart, Eye, Share2 } from 'lucide-react';

const Gallery2 = () => {
  return (
    <div className="w-full h-screen bg-white flex">
      {/* Tarjeta Negra - Columna izquierda completa */}
      <div className="w-1/4 h-full bg-gradient-to-br from-gray-900 to-black group cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Elegancia Oscura</h3>
            <p className="text-white/80 text-lg">Minimalismo sofisticado</p>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors w-fit">
              <Heart size={24} />
            </button>
            <button className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors w-fit">
              <Eye size={24} />
            </button>
            <button className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors w-fit">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Columna derecha con el resto de tarjetas */}
      <div className="w-3/4 h-full flex flex-col">
        {/* Fila superior - Tarjeta Verde */}
        <div className="w-full h-1/3 flex">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Naturaleza Vibrante</h3>
                <p className="text-white/80 text-lg">Explorando paisajes únicos</p>
              </div>
              <div className="flex space-x-6">
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                  <Heart size={24} />
                </button>
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                  <Eye size={24} />
                </button>
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fila inferior */}
        <div className="w-full h-2/3 flex">
          {/* Columna izquierda de la fila inferior */}
          <div className="w-2/3 h-full flex flex-col">
            {/* Tarjeta Azul */}
            <div className="w-full h-3/5 bg-gradient-to-br from-blue-400 to-blue-600 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Océano Profundo</h3>
                  <p className="text-white/80 text-lg">Misterios del mar azul</p>
                </div>
                <div className="flex space-x-6">
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Heart size={24} />
                  </button>
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Eye size={24} />
                  </button>
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Tarjeta Roja */}
            <div className="w-full h-2/5 bg-gradient-to-br from-red-400 to-red-600 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Pasión Ardiente</h3>
                  <p className="text-white/80 text-lg">Emociones intensas</p>
                </div>
                <div className="flex space-x-6">
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Heart size={24} />
                  </button>
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Eye size={24} />
                  </button>
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Naranja - Columna derecha de la fila inferior */}
          <div className="w-1/3 h-full bg-gradient-to-br from-orange-400 to-orange-600 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Atardecer Cálido</h3>
                <p className="text-white/80 text-lg">Colores que inspiran</p>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors w-fit">
                  <Heart size={24} />
                </button>
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors w-fit">
                  <Eye size={24} />
                </button>
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors w-fit">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;