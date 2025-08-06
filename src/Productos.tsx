import { useState } from 'react';

export const Productos = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white" id="top">
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
            {/* Aditivos */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onClick={() => {
                const element = document.getElementById('section-aditivos');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/categorias05.png"
                  alt="Aditivos"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Colores */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onClick={() => {
                const element = document.getElementById('section-colores');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/categorias04.png"
                  alt="Colores"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Mezclas */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onClick={() => {
                const element = document.getElementById('section-mezclas');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/categorias02.png"
                  alt="Mezclas"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Moldes */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onClick={() => {
                const element = document.getElementById('section-moldes');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/categorias03.png"
                  alt="Moldes"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Lacas */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onClick={() => {
                const element = document.getElementById('section-lacas');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/categorias01.png"
                  alt="Lacas"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-2xl lato-regular" style={{ color: 'rgb(23, 99, 141)' }}>
              O sigue bajando para explorar todos nuestros productos
            </p>
          </div>
        </section>

        {/* Sección de Aditivos */}
        <section id="section-aditivos" className="w-full mb-9">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px]">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Aditivos
            </h1>
            <p className="lato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              El plus para tu producto
            </p>
          </div>

          <div className="grid grid-cols-2 h-100">
            {/* Columna izquierda - 2 filas */}
            <div className="grid grid-rows-2 gap-0">
              {/* Conservadores */}
              <div 
                className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
                onMouseEnter={() => setHoveredCard('aditivo-conservadores')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/aditivo1.png"
                    alt="Conservadores"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/45 z-10"></div>
                </div>
                
                {hoveredCard !== 'aditivo-conservadores' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                      Conservadores
                    </h3>
                  </div>
                )}
                
                {hoveredCard === 'aditivo-conservadores' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                    <div className="text-center px-4">
                      <h3 className="text-white lato-regular mb-2 text-2xl">
                        Conservadores
                      </h3>
                      <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                        -Benzoato de sodio{"\n"}-Natamiana{"\n"}-Nisina{"\n"}-Propionato de Calcio{"\n"}-Propionato de Sodio
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Estabilizantes, Espesantes y Emulsionantes */}
              <div 
                className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
                onMouseEnter={() => setHoveredCard('aditivo-estabilizantes')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/aditivos3.png"
                    alt="Estabilizantes"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/45 z-10"></div>
                </div>
                
                {hoveredCard !== 'aditivo-estabilizantes' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                      Estabilizantes, Espesantes y Emulsionantes
                    </h3>
                  </div>
                )}
                
                {hoveredCard === 'aditivo-estabilizantes' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                    <div className="text-center px-4">
                      <h3 className="text-white lato-regular mb-2 text-2xl">
                        Estabilizantes, Espesantes y Emulsionantes
                      </h3>
                      <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                        -CMC (Carboximetilcelulosa){"\n"}-Goma Arábiga{"\n"}-Goma Guar{"\n"}-Lecitina de Soya{"\n"}-Pectina
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Columna derecha - 2 filas */}
            <div className="grid grid-rows-2 gap-0">
              {/* Fila superior dividida en 2 columnas */}
              <div className="grid grid-cols-2 gap-0">
                {/* Mejoradores de Sabor */}
                <div 
                  className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
                  onMouseEnter={() => setHoveredCard('aditivo-mejoradores')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/aditivos2.png"
                      alt="Mejoradores de Sabor"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/45 z-10"></div>
                  </div>
                  
                  {hoveredCard !== 'aditivo-mejoradores' && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                      <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                        Mejoradores de Sabor
                      </h3>
                    </div>
                  )}
                  
                  {hoveredCard === 'aditivo-mejoradores' && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                      <div className="text-center px-4">
                        <h3 className="text-white lato-regular mb-2 text-2xl">
                          Mejoradores de Sabor
                        </h3>
                        <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                          -Glutamato Monosódico{"\n"}-Sabores
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Leudantes y Agentes de Textura */}
                <div 
                  className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
                  onMouseEnter={() => setHoveredCard('aditivo-leudantes')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/aditivos4.png"
                      alt="Leudantes"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/45 z-10"></div>
                  </div>
                  
                  {hoveredCard !== 'aditivo-leudantes' && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                      <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                        Leudantes y Agentes de Textura
                      </h3>
                    </div>
                  )}
                  
                  {hoveredCard === 'aditivo-leudantes' && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                      <div className="text-center px-4">
                        <h3 className="text-white lato-regular mb-2 text-2xl">
                          Leudantes y Agentes de Textura
                        </h3>
                        <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                          -Bicarbonato de Sodio{"\n"}-Bicarbonato de Amonio
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Acidulantes y Reguladores de Acidez */}
              <div 
                className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
                onMouseEnter={() => setHoveredCard('aditivo-acidulantes')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/aditivos5.png"
                    alt="Acidulantes"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/45 z-10"></div>
                </div>
                
                {hoveredCard !== 'aditivo-acidulantes' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                      Acidulantes y Reguladores de Acidez
                    </h3>
                  </div>
                )}
                
                {hoveredCard === 'aditivo-acidulantes' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                    <div className="text-center px-4">
                      <h3 className="text-white lato-regular mb-2 text-2xl">
                        Acidulantes y Reguladores de Acidez
                      </h3>
                      <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                        -Ácido Cítrico{"\n"}-Ácido Fumárico{"\n"}-Citrato de Sodio{"\n"}-Citrato de Potasio{"\n"}-Ácido Láctico
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Colores Primarios */}
        <section id="section-colores" className="w-full mb-10">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px]">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Colores Primarios
            </h1>
            <p className="lato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              Disolver para técnicas de agua
            </p>
          </div>
          
          <div className="grid grid-cols-3 h-40">
            {/* Azules */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onMouseEnter={() => setHoveredCard('color-azul')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/cp1.png"
                  alt="Azules"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/45 z-10"></div>
              </div>
              
              {hoveredCard !== 'color-azul' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                  <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                    Azules
                  </h3>
                </div>
              )}
              
              {hoveredCard === 'color-azul' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                  <div className="text-center px-4">
                    <h3 className="text-white lato-regular mb-2 text-2xl">
                      Azules
                    </h3>
                    <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                      -Azul 1{"\n"}-Azul 2
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rojos */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onMouseEnter={() => setHoveredCard('color-rojo')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/cp2.png"
                  alt="Rojos"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/45 z-10"></div>
              </div>
              
              {hoveredCard !== 'color-rojo' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                  <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                    Rojos
                  </h3>
                </div>
              )}
              
              {hoveredCard === 'color-rojo' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                  <div className="text-center px-4">
                    <h3 className="text-white lato-regular mb-2 text-2xl">
                      Rojos
                    </h3>
                    <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                      -Rojo 3{"\n"}-Rojo 5{"\n"}-Rojo 6{"\n"}-Rojo 40
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Amarillos */}
            <div 
              className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full"
              onMouseEnter={() => setHoveredCard('color-amarillo')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/cp3.png"
                  alt="Amarillos"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/45 z-10"></div>
              </div>
              
              {hoveredCard !== 'color-amarillo' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/50">
                  <h3 className="text-slate-100 lato-regular text-3xl text-center px-4">
                    Amarillos
                  </h3>
                </div>
              )}
              
              {hoveredCard === 'color-amarillo' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                  <div className="text-center px-4">
                    <h3 className="text-white lato-regular mb-2 text-2xl">
                      Amarillos
                    </h3>
                    <p className="whitespace-pre-line lato-regular text-white/90 text-base text-left">
                      -Amarillo 5{"\n"}-Amarillo 6
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sección de Lacas Alumínicas */}
        <section id="section-lacas" className="w-full mb-10">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px]">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Lacas Alumínicas
            </h1>
            <p className="lato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              Disolver con grasas y aceites
            </p>
          </div>
          
          <div className="grid grid-cols-4 grid-rows-2 h-80">
            {/* Laca DC Amarillo #5 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas08.png"
                  alt="Laca DC Amarillo #5"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca DC Amarillo #5
                </h3>
              </div>
            </div>

            {/* Laca DC Amarillo #6 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas07.png"
                  alt="Laca DC Amarillo #6"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca DC Amarillo #6
                </h3>
              </div>
            </div>

            {/* Laca Rojo #3 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas06.png"
                  alt="Laca Rojo #3"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Rojo #3
                </h3>
              </div>
            </div>

            {/* Laca Rojo #5 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas05.png"
                  alt="Laca Rojo #5"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Rojo #5
                </h3>
              </div>
            </div>

            {/* Laca Rojo #6 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas04.png"
                  alt="Laca Rojo #6"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Rojo #6
                </h3>
              </div>
            </div>

            {/* Laca Rojo #40 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas03.png"
                  alt="Laca Rojo #40"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Rojo #40
                </h3>
              </div>
            </div>

            {/* Laca Azul #1 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas02.png"
                  alt="Laca Azul #1"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Azul #1
                </h3>
              </div>
            </div>

            {/* Laca Azul #2 */}
            <div className="relative cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/lacas01.png"
                  alt="Laca Azul #2"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-black/20">
                <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl group-hover:font-bold">
                  Laca Azul #2
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Mezclas */}
        <section id="section-mezclas" className="w-full mb-10">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px]">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Mezclas
            </h1>
            <p className="lato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              Mezclamos cada color y laca que necesites
            </p>
          </div>
          
<div
  className="relative py-8 text-center h-55 bg-cover bg-center cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10"
  style={{ backgroundImage: 'url(/mezclas.png)' }}
>
  {/* Filtro oscuro */}
  <div className="absolute inset-0 bg-black/60 z-0 transition-all duration-300 group-hover:bg-black/70"></div>

  {/* Contenido */}
  <div className="relative z-10 transition-all duration-300">
    <h3 className="text-4xl font-medium text-white mb-2 transition-all duration-300 group-hover:text-5xl">
      Mezclas de colores y lacas
    </h3>
    <p className="text-white/90 text-2xl transition-all duration-300 group-hover:text-3xl">
      Verdes, morados, cafés, negros y más
    </p>
  </div>
</div>

        </section>

        {/* Sección de Moldes */}
        <section id="section-moldes" className="w-full mb-10">
          <div className="bg-[url('/marcoColores1.png')] bg-cover bg-center py-4 px-10 text-right h-[170px]">
            <h1 className="tracking-tight lato-normal text-7xl sm:text-5xl lg:text-7xl" style={{ color: 'rgb(203, 6, 124)' }}>
              Moldes para repostería
            </h1>
            <p className="lato-regular text-4xl mb-4" style={{ color: 'rgb(23, 99, 141)' }}>
              ¡Pregunta por los diseños de nuestro catálogo!
            </p>
          </div>
          
          <div className="grid grid-cols-4 h-64">
            {/* Caramelos */}
<div className="relative h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/moldes04.png"
      alt="Galletas"
      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/45 z-10"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl">
      Caramelos
    </h3>
  </div>
</div>

            {/* Chocolates */}
<div className="relative h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/moldes02.png"
      alt="Galletas"
      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/45 z-10"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl">
      Chocolates
    </h3>
  </div>
</div>

            {/* Pasteles */}
<div className="relative h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/moldes03.png"
      alt="Galletas"
      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/45 z-10"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl">
      Pasteles
    </h3>
  </div>
</div>

            {/* Galletas */}
<div className="relative h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/moldes01.png"
      alt="Galletas"
      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/45 z-10"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <h3 className="text-slate-100 lato-regular text-3xl text-center px-4 transition-all duration-300 group-hover:text-4xl">
      Galletas
    </h3>
  </div>
</div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;