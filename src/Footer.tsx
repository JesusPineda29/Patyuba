import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#082748] text-white px-6 pt-7 pb-4 text-lg">
      <div className="max-w-7xl mx-auto">
        {/* Contenido principal del footer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 md:px-8">
          {/* Logo e ilustración */}
          <div className="flex-shrink-0 md:ml-4 mb-4 md:mb-0">
            <a href="#inicio" className="block">
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-lg font-semibold">PAT-YUBA</h2>
                <div className="w-20 max-h-10">
                  <img
                    src="/star.png"
                    alt="Estrella azul"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Dirección */}
          <div className="text-sm leading-6 flex-1 md:text-center">
            <p>Calle Anafre Mz 393, Lote 10.</p>
            <p>Col. Miguel De La Madrid</p>
            <p>C.P. 09698 Iztapalapa, CDMX</p>
          </div>
          {/* Contacto */}
          <div className="text-sm leading-6 flex-shrink-0 md:mr-4">
            <p>lizpatsy@patyuba.com</p>
            <p>5514958244</p>
            <div className="my-4" />
            <p>ventas@patyuba.com</p>
            <p>220 138 8450</p>
          </div>
        </div>
        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-6">
          {/* Footer inferior */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-base text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Comercializadora PAT-YUBA. Todos los derechos reservados.
            </div>
            {/* Información del desarrollador */}
            <div className="flex items-center gap-3 text-base text-gray-400">
              <span>Sitio desarrollado por:</span>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sublime.png"
                  alt="Logo del desarrollador"
                  className="w-40 object-contain hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer