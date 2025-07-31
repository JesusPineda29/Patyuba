// src/pages/Home.tsx
import HeroCarousel from './carrusel';
import ImprovedHeader from './Header';
import ImprovedSections from './Somos';
import SimpleCarousel from './2carrucel';
import Gallery from './Gallery';
import SeccionContacto from './SeccionContacto ';
import FloatingContactWidget from './FloatingContactWidget';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <ImprovedHeader />
      <HeroCarousel />
      <ImprovedSections />
      <SimpleCarousel />
      <SeccionContacto />
      <Gallery />
      <FloatingContactWidget />
    </div>
  );
};

export default Home;
