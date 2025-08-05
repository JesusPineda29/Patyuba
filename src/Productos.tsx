import { useState } from 'react';

export const Productos = () => {
  // Estado para controlar qué tarjeta está siendo hovereada
  const [hoveredCard, setHoveredCard] = useState(null);

  // Función para hacer scroll suave a una sección específica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Datos de las categorías principales - mostradas en la fila superior
  const mainCategories = [
    {
      id: 'aditivos',
      title: '',
      defaultImage: '/categorias05.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Mejora tus mezclas',
      hasHoverEffect: true // Solo aditivos tendrán hover
    },
    {
      id: 'colores',
      title: '',
      defaultImage: 'categorias04.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Vibrantes y duraderos',
      hasHoverEffect: false // Los colores principales no tienen hover aquí
    },
    {
      id: 'mezclas',
      title: '',
      defaultImage: '/categorias02.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Combinaciones perfectas',
      hasHoverEffect: false
    },
    {
      id: 'moldes',
      title: '',
      defaultImage: '/categorias03.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Formas increíbles',
      hasHoverEffect: false
    },
    {
      id: 'lacas',
      title: '',
      defaultImage: '/categorias01.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Brillos metálicos',
      hasHoverEffect: false
    }
  ];

  // Array de productos de aditivos
  const aditivosProducts = [
    { 
      name: 'Laca DC Amarillo #6', 
      image: '/lacasBoton.jpg', 
      hoverImage: '/api/placeholder/200/200',
      hoverText: 'Aditivo premium para mejores resultados',
      hasHoverEffect: true
    },
    { 
      name: 'Laca DC Amarillo #6', 
      image: '/api/placeholder/200/200', 
      hoverImage: '/api/placeholder/200/200',
      hoverText: 'Calidad superior garantizada',
      hasHoverEffect: true
    },
    { 
      name: 'Laca DC Amarillo #6', 
      image: '/api/placeholder/200/200', 
      hoverImage: '/api/placeholder/200/200',
      hoverText: 'Fórmula especializada',
      hasHoverEffect: true
    },
    { 
      name: 'Laca DC Amarillo #6', 
      image: '/api/placeholder/200/200', 
      hoverImage: '/api/placeholder/200/200',
      hoverText: 'Rendimiento excepcional',
      hasHoverEffect: true
    },
    { 
      name: 'Laca DC Amarillo #6', 
      image: '/api/placeholder/200/200', 
      hoverImage: '/api/placeholder/200/200',
      hoverText: 'Innovación en cada gota',
      hasHoverEffect: true
    }
  ];

  // Array de colores primarios
  const coloresPrimarios = [
    { 
      name: 'Azules', 
      image: '/cp1.png', 
      hoverImage: '/api/placeholder/300/150',
      hoverText: 'Tonalidades azules vibrantes',
      hasHoverEffect: true
    },
    { 
      name: 'Rojos', 
      image: '/cp2.png', 
      hoverImage: '/api/placeholder/300/150',
      hoverText: 'Rojos intensos y duraderos',
      hasHoverEffect: true
    },
    { 
      name: 'Amarillos', 
      image: '/cp3.png', 
      hoverImage: '/api/placeholder/300/150',
      hoverText: 'Amarillos brillantes y puros',
      hasHoverEffect: true
    }
  ];

  // Array de lacas alumínicas (SIN hover effect)
  const lacasAluminicas = [
    { name: 'Laca DC Amarillo #5', image: '/lacas08.png', hasHoverEffect: false },
    { name: 'Laca DC Amarillo #6', image: '/lacas07.png', hasHoverEffect: false },
    { name: 'Laca Rojo #3', image: '/lacas06.png', hasHoverEffect: false },
    { name: 'Laca Rojo #5', image: '/lacas05.png', hasHoverEffect: false },
    { name: 'Laca Rojo #6', image: '/lacas04.png', hasHoverEffect: false },
    { name: 'Laca Rojo #40', image: '/lacas03.png', hasHoverEffect: false },
    { name: 'Laca Azul #1', image: '/lacas02.png', hasHoverEffect: false },
    { name: 'Laca Azul #2', image: '/lacas01.png', hasHoverEffect: false }
  ];

  // Array de especialidades (SIN hover effect)
  const especialidades = [
    { name: 'Caramelos', image: '/moldes04.png', hasHoverEffect: false },
    { name: 'Chocolates', image: 'moldes02.png', hasHoverEffect: false },
    { name: 'Pasteles', image: '/moldes03.png', hasHoverEffect: false },
    { name: 'Galletas', image: '/moldes01.png', hasHoverEffect: false }
  ];

  // Componente reutilizable para mostrar cada tarjeta de producto
  const ProductCard = ({ product, cardId, className = "", applyDarkFilter = false, onClick = null }) => {
    // Verifica si esta tarjeta específica está siendo hovereada
    const isHovered = hoveredCard === cardId;
    // Verifica si esta tarjeta debe tener efecto hover
    const shouldHaveHover = product.hasHoverEffect;
    
    return (
      <div
        className={`relative bg-gray-400 cursor-pointer group transition-all duration-300 ${className} ${
          !shouldHaveHover ? 'hover:scale-105 hover:shadow-xl hover:z-10' : ''
        }`}
        onMouseEnter={() => shouldHaveHover ? setHoveredCard(cardId) : null}
        onMouseLeave={() => shouldHaveHover ? setHoveredCard(null) : null}
        onClick={onClick}
      >
        {/* Contenedor de la imagen del producto */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={isHovered && shouldHaveHover ? product.hoverImage : (product.defaultImage || product.image)}
            alt={product.title || product.name}
            className={`w-full h-full object-cover transition-all duration-300 ${
              applyDarkFilter ? 'opacity-80' : ''
            } ${!shouldHaveHover ? 'group-hover:scale-110' : ''}`}
          />
        </div>

        {/* Texto mostrado cuando NO hay hover O cuando no tiene efecto hover */}
        {(!isHovered || !shouldHaveHover) && (
          <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 ${
            !shouldHaveHover ? 'group-hover:bg-black/20' : ''
          }`}>
            <h3 className={`text-white font-medium text-center px-4 transition-all duration-300 ${
              !shouldHaveHover ? 'group-hover:text-lg group-hover:font-bold' : ''
            }`}>
              {product.title || product.name}
            </h3>
          </div>
        )}

        {/* Texto mostrado cuando SÍ hay hover (solo para tarjetas con hasHoverEffect: true) */}
        {isHovered && shouldHaveHover && product.hoverText && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4">
              <h3 className="text-white font-medium mb-2">
                {product.title || product.name}
              </h3>
              <p className="text-white/90 text-sm">
                {product.hoverText}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <div>
          <h1 className='bg-pink-800 h-20'></h1>
        </div>
        {/* Encabezado de la página */}
        <header className="text-center py-10 px-8">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'rgb(23, 99, 141)' }}>
            Conoce nuestros <span style={{ color: 'rgb(203, 6, 124)' }}>productos</span>
          </h1>
          <p className="text-2xl" style={{ color: 'rgb(23, 99, 141)' }}>
            Selecciona directamente el elemento que buscas
          </p>
        </header>

        {/* Sección de categorías principales - Grid de 5 columnas */}
        <section className="w-full">
          <div className="grid grid-cols-5 h-140">
            {mainCategories.map((category, index) => (
              <ProductCard 
                key={category.id}
                product={category}
                cardId={`main-${category.id}`}
                className="h-full"
                applyDarkFilter={false}
                onClick={() => scrollToSection(`section-${category.id}`)}
              />
            ))}
          </div>
          <div className="text-center py-8">
            <p className="text-2xl " style={{ color: 'rgb(23, 99, 141)' }}>
              O sigue bajando para explorar todos nuestros productos
            </p>
          </div>
        </section>

        {/* Sección de Aditivos (CON hover effect) */}
<section id="section-aditivos" className="w-full mb-10">
  <div className="bg-[url('/marcoColores.png')] bg-cover bg-center py-4 px-10 text-right h-[181px]">
    <h1 className="font-semibold mb-4 text-5xl sm:text-5xl lg:text-6xl" style={{ color: 'rgb(203, 6, 124)' }}>
      Aditivos
    </h1>
    <p className="text-3xl" style={{ color: 'rgb(23, 99, 141)' }}>
      El plus para tu producto
    </p>
  </div>
  
  {/* Grid principal con 2 columnas */}
  <div className="grid grid-cols-2 h-64">
    {/* Columna izquierda - 2 filas */}
    <div className="grid grid-rows-2 gap-0">
      <ProductCard
        product={aditivosProducts[0]} // Conservadores
        cardId="aditivo-0"
        className="h-full"
        applyDarkFilter={true}
      />
      <ProductCard
        product={aditivosProducts[1]} // Estabilizantes, espesantes y emulsionantes
        cardId="aditivo-1"
        className="h-full"
        applyDarkFilter={true}
      />
    </div>
    
    {/* Columna derecha - 2 filas */}
    <div className="grid grid-rows-2 gap-0">
      <ProductCard
        product={aditivosProducts[2]} // Mejoradores de sabor
        cardId="aditivo-2"
        className="h-full"
        applyDarkFilter={true}
      />
      
      {/* Fila inferior dividida en 2 columnas */}
      <div className="grid grid-cols-2 gap-0">
        <ProductCard
          product={aditivosProducts[3]} // Leudantes y agentes de textura
          cardId="aditivo-3"
          className="h-full"
          applyDarkFilter={true}
        />
        <ProductCard
          product={aditivosProducts[4]} // Acidulantes y reguladores de acidez
          cardId="aditivo-4"
          className="h-full"
          applyDarkFilter={true}
        />
      </div>
    </div>
  </div>
</section>

        {/* Sección de Colores Primarios (CON hover effect) */}
        <section id="section-colores" className="w-full mb-10">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Colores primarios</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          <div className="grid grid-cols-3 h-40">
            {coloresPrimarios.map((color, index) => (
              <ProductCard 
                key={`color-${index}`}
                product={color}
                cardId={`color-${index}`}
                className="h-full"
                applyDarkFilter={true}
              />
            ))}
          </div>
        </section>

        {/* Sección de Lacas Alumínicas (SIN hover effect) */}
        <section id="section-lacas" className="w-full mb-10">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Lacas alumínicas</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 h-80">
            {lacasAluminicas.map((laca, index) => (
              <ProductCard 
                key={`laca-${index}`}
                product={laca}
                cardId={`laca-${index}`}
                className="h-full"
                applyDarkFilter={false}
              />
            ))}
          </div>
        </section>

        {/* Sección de Mezclas */}
        <section id="section-mezclas" className="w-full mb-10">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Mezclas</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          <div className="relative py-8 text-center h-42 bg-cover bg-center opacity-80" style={{backgroundImage: 'url(/mezclas.png)'}}>
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-white mb-2">
                Mezclas de colores y lacas
              </h3>
              <p className="text-white/90">
                Verdes, morados, cafés, negros y más
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Especialidades (SIN hover effect) */}
        <section id="section-moldes" className="w-full mb-10">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Especialidades</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          <div className="grid grid-cols-4 h-64">
            {especialidades.map((especialidad, index) => (
              <ProductCard 
                key={`especialidad-${index}`}
                product={especialidad}
                cardId={`especialidad-${index}`}
                className="h-full"
                applyDarkFilter={true}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;