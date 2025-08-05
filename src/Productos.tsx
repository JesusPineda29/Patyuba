import { useState } from 'react';

export const Productos = () => {
  // Estado para controlar qué tarjeta está siendo hovereada
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Función para hacer scroll suave a una sección específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // h-20 = 5rem = 80px
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Datos de las categorías principales - mostradas en la fila superior
  const mainCategories = [
    {
      id: 'aditivos',
      title: '',
      defaultImage: '/categorias05.png',
      hoverText: 'Mejora tus mezclas',
      hasHoverEffect: false
    },
    {
      id: 'colores',
      title: '',
      defaultImage: 'categorias04.png',
      hoverText: 'Vibrantes y duraderos',
      hasHoverEffect: false // Los colores principales no tienen hover aquí
    },
    {
      id: 'mezclas',
      title: '',
      defaultImage: '/categorias02.png',
      hoverText: 'Combinaciones perfectas',
      hasHoverEffect: false
    },
    {
      id: 'moldes',
      title: '',
      defaultImage: '/categorias03.png',
      hoverText: 'Formas increíbles',
      hasHoverEffect: false
    },
    {
      id: 'lacas',
      title: '',
      defaultImage: '/categorias01.png',
      hoverText: 'Brillos metálicos',
      hasHoverEffect: false
    }
  ];

  // Array de productos de aditivos
  const aditivosProducts = [
    {
      name: 'Conservadores',
      image: '/aditivo1.png',
      hoverText: `-Benzoato de sodio\n-Natamiana\n-Nisina\n-Propionato de Calcion\n-Propionato de Sodio`,
      hasHoverEffect: true
    },
    {
      name: 'Estabilizantes, Espesantes y Emulsionates',
      image: '/aditivos3.png',
      hoverText: `-CMC (Carboximetilcelulosa)\n-Goma Arábiga\n-Goma Guar\n-Lecitina de Soya\n-Pectina`,
      hasHoverEffect: true
    },
    {
      name: 'Acidulantes y Reguladores de Acides',
      image: '/aditivos5.png',
      hoverText: `-Ácido Cítrico\n-Ácido Fumárico\n-Citrato de Sodio\n-Citrato de Potasio\n-Ácido Láctico`,
      hasHoverEffect: true
    },
    {
      name: 'Mejoradores de Sabor',
      image: '/aditivos2.png',
      hoverText: '-Glutamato Monosódico\n-Sabores',
      hasHoverEffect: true
    },
    {
      name: 'Leudantes y Agentes de Textura',
      image: '/aditivos4.png',
      hoverText: '-Bicarbonato de Sodio\n-Bicarbonato de Amonio',
      hasHoverEffect: true
    }
  ];

  // Array de colores primarios
  const coloresPrimarios = [
    {
      name: 'Azules',
      image: '/cp1.png',
      hoverText: '-Azul 1\n-Azul 2',
      hasHoverEffect: true
    },
    {
      name: 'Rojos',
      image: '/cp2.png',
      hoverText: '-Rojo 3\n-Rojo 5 \n-Rojo 6\n-Rojo 40',
      hasHoverEffect: true
    },
    {
      name: 'Amarillos',
      image: '/cp3.png',
      hoverText: '-Amarillo 5\n-Amarillo 6',
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
  const ProductCard = ({ product, cardId, className = "", applyDarkFilter = false, onClick = null }: {
    product: any;
    cardId: string;
    className?: string;
    applyDarkFilter?: boolean;
    onClick?: (() => void) | null;
  }) => {
    // Verifica si esta tarjeta específica está siendo hovereada
    const isHovered = hoveredCard === cardId
    // Verifica si esta tarjeta debe tener efecto hover
    const shouldHaveHover = product.hasHoverEffect;

    return (
      <div
        className={`relative bg-pink-500 cursor-pointer group transition-all duration-300 ${className} hover:scale-105 hover:shadow-xl hover:z-10`}
        onMouseEnter={() => shouldHaveHover ? setHoveredCard(cardId) : undefined}
        onMouseLeave={() => shouldHaveHover ? setHoveredCard(null) : undefined}
        onClick={onClick || undefined}
      >
        {/* Contenedor de la imagen del producto */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={product.defaultImage || product.image}
            alt={product.title || product.name}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />

          {applyDarkFilter && (
            <div className="absolute inset-0 bg-black/45 z-10"></div> // Overlay oscuro
          )}
        </div>

        {/* Texto mostrado cuando NO hay hover O cuando no tiene efecto hover */}
        {(!isHovered || !shouldHaveHover) && (
          <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 ${!shouldHaveHover ? 'group-hover:bg-black/20' : 'group-hover:bg-black/50'}`}>
            <h3 className={`text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 ${!shouldHaveHover ? 'group-hover:text-4xl group-hover:font-bold' : ''
              }`}>
              {product.title || product.name}
            </h3>
          </div>
        )}

        {/* Texto mostrado cuando SÍ hay hover (solo para tarjetas con hasHoverEffect: true) */}
        {isHovered && shouldHaveHover && product.hoverText && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/70">
            <div className="text-center px-4">
              <h3 className="text-white lato-regular mb-2 text-2xl">
                {product.title || product.name}
              </h3>
              <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
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
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold lato-regular" style={{ color: 'rgb(23, 99, 141)' }}>
            Conoce nuestros <span className='font-bold' style={{ color: 'rgb(203, 6, 124)' }}>productos</span>
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
            <p className="text-2xl lato-regular" style={{ color: 'rgb(23, 99, 141)' }}>
              O sigue bajando para explorar todos nuestros productos
            </p>
          </div>
        </section>

        {/* Sección de Aditivos (CON hover effect) */}
        <section id="section-aditivos" className="w-full mb-9">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px] ">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Aditivos
            </h1>
            <p className="ato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              El plus para tu producto
            </p>
          </div>

          {/* Grid principal con 2 columnas */}
          <div className="grid grid-cols-2 h-100">
            {/* Columna izquierda - 2 filas */}
            <div className="grid grid-rows-2 gap-0">
              <ProductCard
                product={aditivosProducts[0]} // Conservadores
                cardId="aditivo-0"
                className="h-full bg-black/10 absolute inset-0 "
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
            <div className="grid grid-rows-2 gap-0 ">
              {/* Fila inferior dividida en 2 columnas */}
              <div className="grid grid-cols-2 gap-0 ">
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
              <ProductCard
                product={aditivosProducts[2]} // Mejoradores de sabor
                cardId="aditivo-2"
                className="h-full"
                applyDarkFilter={true}
              />


            </div>
          </div>
        </section>

        {/* Sección de Colores Primarios (CON hover effect) */}
        <section id="section-colores" className="w-full mb-10">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px] ">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Colores Primarios
            </h1>
            <p className="ato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              El plus para tu producto
            </p>
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
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px] ">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Lacas Alumínicas
            </h1>
            <p className="ato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              Disolver con grasas y aceites
            </p>
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
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px] ">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Mezclas
            </h1>
            <p className="ato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              Mezclamos cada color y laca que necesites
            </p>
          </div>
          <div className="relative py-8 text-center h-42 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/mezclas.png)' }}>
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
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px] ">
            <h1 className="tracking-tight lato-normal  text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Moldes para reposteria
            </h1>
            <p className="ato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              El plus para tu producto
            </p>
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


