import { useState } from 'react';

export const Productos = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const mainCategories = [
    {
      id: 'aditivos',
      title: 'Aditivos',
      defaultImage: '/api/placeholder/300/400',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Mejora tus mezclas'
    },
    {
      id: 'colores',
      title: 'Colores primarios',
      defaultImage: '/api/placeholder/300/400',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Vibrantes y duraderos'
    },
    {
      id: 'mezclas',
      title: 'Mezclas',
      defaultImage: '/api/placeholder/300/400',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Combinaciones perfectas'
    },
    {
      id: 'moldes',
      title: 'Moldes para repostería',
      defaultImage: '/api/placeholder/300/400',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Formas increíbles'
    },
    {
      id: 'lacas',
      title: 'Lacas alumínicas',
      defaultImage: '/api/placeholder/300/400',
      hoverImage: '/api/placeholder/300/400',
      hoverText: 'Brillos metálicos'
    }
  ];

  const aditivosProducts = [
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Laca DC Amarillo #6', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' }
  ];

  const coloresPrimarios = [
    { name: 'Azules', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' },
    { name: 'Rojos', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' },
    { name: 'Amarillos', image: '/api/placeholder/300/150', hoverImage: '/api/placeholder/300/150' }
  ];

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

  const especialidades = [
    { name: 'Caramelos', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Chocolates', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Pasteles', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' },
    { name: 'Galletas', image: '/api/placeholder/200/200', hoverImage: '/api/placeholder/200/200' }
  ];

  const ProductCard = ({ product, cardId, className = "" }) => {
    const isHovered = hoveredCard === cardId;
    
    return (
      <div
        className={`relative bg-gray-400 cursor-pointer group transition-all duration-300 ${className}`}
        onMouseEnter={() => setHoveredCard(cardId)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Imagen del producto */}
        <div className="absolute inset-0">
          <img 
            src={isHovered ? product.hoverImage : (product.defaultImage || product.image)}
            alt={product.title || product.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Texto por defecto (sin hover) */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h3 className="text-white font-medium text-center px-4">
              {product.title || product.name}
            </h3>
          </div>
        )}

        {/* Texto en hover */}
        {isHovered && product.hoverText && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
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
        {/* Header */}
        <header className="text-center py-16 px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Conoce nuestros productos
          </h1>
          <p className="text-lg text-gray-600">
            Selecciona directamente el elemento que buscas
          </p>
        </header>

        {/* Categorías principales - 5 columnas que abarcan toda la página */}
        <section className="w-full">
          <div className="grid grid-cols-5 h-96">
            {mainCategories.map((category, index) => (
              <ProductCard 
                key={category.id}
                product={category}
                cardId={`main-${category.id}`}
                className="h-full"
              />
            ))}
          </div>
          <div className="text-center py-8 bg-gray-100">
            <p className="text-gray-600">
              O sigue bajando para explorar todos nuestros productos
            </p>
          </div>
        </section>

        {/* Sección Aditivos */}
        <section className="w-full">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Aditivos</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
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

        {/* Sección Colores Primarios */}
        <section className="w-full">
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
              />
            ))}
          </div>
        </section>

        {/* Sección Lacas Alumínicas */}
        <section className="w-full">
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
              />
            ))}
          </div>
        </section>

        {/* Sección Mezclas */}
        <section className="w-full">
          <div className="bg-gray-300 py-4 px-8 text-right">
            <h2 className="text-2xl font-bold text-gray-800">Mezclas</h2>
            <p className="text-gray-600">El plus para tu producto</p>
          </div>
          <div className="bg-gray-400 py-8 text-center">
            <h3 className="text-xl font-medium text-white mb-2">
              Mezclas de colores y lacas
            </h3>
            <p className="text-white/90">
              Verdes, morados, cafés, negros y más
            </p>
          </div>
        </section>

        {/* Sección Especialidades */}
        <section className="w-full">
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
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;