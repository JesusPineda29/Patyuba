import { useState } from 'react';

export const Productos = () => {
  // Estado para controlar qué tarjeta está siendo hovereada
  const [hoveredCard, setHoveredCard] = useState(null);

  // Datos de las categorías principales - mostradas en la fila superior
  const mainCategories = [
    {
      id: 'aditivos',
      title: 'Aditivos',
      defaultImage: '/aditivosBoton.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Mejora tus mezclas'
    },
    {
      id: 'colores',
      title: 'Colores primarios',
      defaultImage: '/primariosBoton.jpg',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Vibrantes y duraderos'
    },
    {
      id: 'mezclas',
      title: 'Mezclas',
      defaultImage: '/mezclasBoton.png',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Combinaciones perfectas'
    },
    {
      id: 'moldes',
      title: 'Moldes para repostería',
      defaultImage: '/moldesBoton.jpg',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Formas increíbles'
    },
    {
      id: 'lacas',
      title: 'Lacas alumínicas',
      defaultImage: '/lacasBoton.jpg',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Brillos metálicos'
    }
  ];

  // Array de productos de aditivos
  const aditivosProducts = [
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' }
  ];

  // Array de colores primarios
  const coloresPrimarios = [
    { name: 'Azules', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' },
    { name: 'Rojos', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' },
    { name: 'Amarillos', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' }
  ];

  // Array de lacas alumínicas
  const lacasAluminicas = [
    { name: 'Laca DC Amarillo #5', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Rojo #3', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Rojo #5', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Rojo #6', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Rojo #40', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Azul #1', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' },
    { name: 'Laca Azul #2', image: '/api/placeholder/150/150', hoverImage: '/api/placeholder/150/150' }
  ];

  // Array de especialidades
  const especialidades = [
    { name: 'Caramelos', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Chocolates', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Pasteles', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Galletas', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' }
  ];

  // Componente reutilizable para mostrar cada tarjeta de producto
  const ProductCard = ({ product, cardId, className = "" }) => {
    // Verifica si esta tarjeta específica está siendo hovereada
    const isHovered = hoveredCard === cardId;
    
    return (
      <div
        className={`relative bg-gray-400 cursor-pointer group transition-all duration-300 ${className}`}
        onMouseEnter={() => setHoveredCard(cardId)} // Establece esta tarjeta como hovereada
        onMouseLeave={() => setHoveredCard(null)}   // Quita el estado de hover
      >
        {/* Contenedor de la imagen del producto */}
        <div className="absolute inset-0">
          <img 
            src={isHovered ? product.hoverImage : (product.defaultImage || product.image)}
            alt={product.title || product.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Texto mostrado cuando NO hay hover */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white font-medium text-center px-4">
              {product.title || product.name}
            </h3>
          </div>
        )}

        {/* Texto mostrado cuando SÍ hay hover (solo si existe hoverText) */}
        {isHovered && product.hoverText && (
          <div className="absolute inset-0 flex items-center justify-center ">
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

          <h1 className="   mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'rgb(23, 99, 141)' }}>
            Conoce nuestros <span style={{ color: 'rgb(203, 6, 124)' }}>productos</span>
          </h1>
          <p className="text-2xl " style={{ color: 'rgb(23, 99, 141)' }}>
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
                cardId={`main-${category.id}`} // ID único para cada categoría principal
                className="h-full"
              />
            ))}
          </div>
          {/* Texto separador entre secciones */}
          <div className="text-center py-8 bg-gray-100">
            <p className="text-gray-600">
              O sigue bajando para explorar todos nuestros productos
            </p>
          </div>
        </section>

        {/* Sección de Aditivos */}
        <section className="w-full">
          {/* Header de la sección */}
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Aditivos</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          {/* Grid de productos - 2 productos grandes + 3 pequeños en columna */}
          <div className="grid grid-cols-3 h-64">
            <ProductCard 
              product={aditivosProducts[0]}
              cardId="aditivo-0"
              className="h-full"
            />
            <ProductCard 
              product={aditivosProducts[1]}
              cardId="aditivo-1"
              className="h-full"
            />
            {/* Columna con 3 productos apilados verticalmente */}
            <div className="grid grid-cols-1 grid-rows-3">
              <ProductCard 
                product={aditivosProducts[2]}
                cardId="aditivo-2"
                className="h-full"
              />
              <ProductCard 
                product={aditivosProducts[3]}
                cardId="aditivo-3"
                className="h-full"
              />
              <ProductCard 
                product={aditivosProducts[4]}
                cardId="aditivo-4"
                className="h-full"
              />
            </div>
          </div>
        </section>

        {/* Sección de Colores Primarios */}
        <section className="w-full">
          {/* Header de la sección */}
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Colores primarios</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          {/* Grid de 3 columnas para los colores primarios */}
          <div className="grid grid-cols-3 h-40">
            {coloresPrimarios.map((color, index) => (
              <ProductCard 
                key={`color-${index}`}
                product={color}
                cardId={`color-${index}`}
                className="h-full"
              />
            ))}
          </div>
        </section>

        {/* Sección de Lacas Alumínicas */}
        <section className="w-full">
          {/* Header de la sección */}
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Lacas alumínicas</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          {/* Grid de 4 columnas x 2 filas para las lacas */}
          <div className="grid grid-cols-4 grid-rows-2 h-80">
            {lacasAluminicas.map((laca, index) => (
              <ProductCard 
                key={`laca-${index}`}
                product={laca}
                cardId={`laca-${index}`}
                className="h-full"
              />
            ))}
          </div>
        </section>

        {/* Sección de Mezclas */}
        <section className="w-full">
          {/* Header de la sección */}
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Mezclas</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          {/* Contenido de mezclas - solo texto descriptivo */}
          <div className="bg-gray-400 py-8 text-center">
            <h3 className="text-xl font-medium text-white mb-2">
              Mezclas de colores y lacas
            </h3>
            <p className="text-white/90">
              Verdes, morados, cafés, negros y más
            </p>
          </div>
        </section>

        {/* Sección de Especialidades */}
        <section className="w-full">
          {/* Header de la sección */}
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Especialidades</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          {/* Grid de 4 columnas para las especialidades */}
          <div className="grid grid-cols-4 h-64">
            {especialidades.map((especialidad, index) => (
              <ProductCard 
                key={`especialidad-${index}`}
                product={especialidad}
                cardId={`especialidad-${index}`}
                className="h-full"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;