
import { Download, ChevronRight, Package, Award, Leaf } from 'lucide-react';

const ImprovedSections = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Calidad Premium</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Somos
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    excelencia
                  </span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos una empresa mexicana comprometida con ofrecerte la 
                <span className="font-semibold text-gray-800"> mejor calidad </span>
                en productos alimenticios, combinando tradición e innovación.
              </p>
              
              <div className="flex items-center space-x-2 text-green-700">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium">100% Natural • Certificado • Sustentable</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Descarga ficha técnica</span>
                </button>
                <button className="group bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Descubre más</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="space-y-6">
                {/* Main logo container */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 w-80 h-48 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-700">Tu Logo</span>
                  </div>
                </div>
                
                {/* Small containers */}
                <div className="flex space-x-4 justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-32 h-32 rounded-xl shadow-lg flex items-center justify-center text-white text-sm font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-center">
                      <Award className="w-6 h-6 mx-auto mb-2" />
                      <span>Calidad</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-32 h-32 rounded-xl shadow-lg flex items-center justify-center text-white text-sm font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-center">
                      <Leaf className="w-6 h-6 mx-auto mb-2" />
                      <span>Natural</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-green-300 rounded-full opacity-25 animate-bounce delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Title with gradient text */}
            <div className="space-y-6">

              
              <h2 className="text-6xl font-bold leading-tight">
                <span className="text-white">Conoce</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  nuestro
                </span>
                <br />
                <span className="text-white">catálogo de</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  productos
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Descubre nuestra amplia gama de productos alimenticios de la más alta calidad
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="group relative bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Explorar Catálogo</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImprovedSections;