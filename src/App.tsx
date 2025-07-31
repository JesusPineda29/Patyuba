import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImprovedHeader from './Header';
import Footer from './Footer';
import FloatingContactWidget from './FloatingContactWidget';

// Tus páginas
import Home from './Home';
import {Productos} from './Productos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ImprovedHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
}

export default App;
