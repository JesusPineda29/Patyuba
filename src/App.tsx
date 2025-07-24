
import HeroCarousel from './carrusel';
import ImprovedHeader from './Header';
import ImprovedSections from './Somos';
import SimpleCarousel from './2carrucel';
import Footer from './Footer';
import Gallery from './Gallery';
import SeccionContacto from './SeccionContacto ';


function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}


      <ImprovedHeader />

      {/* Hero Section */}
      <HeroCarousel />


      <ImprovedSections />

      {/* Products Carousel */}
      <SimpleCarousel />


      <SeccionContacto />
      <Gallery />

      <Footer />
    </div>
  );
}

export default App;