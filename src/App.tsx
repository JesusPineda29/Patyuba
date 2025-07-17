
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroCarousel from './carrucel';
import ImprovedHeader from './Header';
import ImprovedSections from './Somos';
import SimpleCarousel from './2carrucel';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}


      <ImprovedHeader/>

      {/* Hero Section */}
      <HeroCarousel />


      <ImprovedSections/>

      {/* Products Carousel */}
<SimpleCarousel/>

      {/* Bottom Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-400 aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-gray-500 transform rotate-45"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Aquí van las<br />
                  tarjetas que le<br />
                  gustaron de la<br />
                  otra página<br />
                  gacha
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;