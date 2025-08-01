// components/Footer.tsx

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#082748] text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Logo e ilustración */}
        <a href="#inicio" className="block h-full">
          <div className="flex flex-col items-start gap-3 h-full">
            <h2 className="text-lg font-semibold">PAT-YUBA</h2>
            <div className="flex-grow w-23 max-h-27">
              <img
                src="/star.png"
                alt="Estrella azul"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </a>


        {/* Menú */}



        {/* Dirección */}
        <div className="text-sm leading-6">
          <p>Calle Anafre Mz 393, Lote 10.</p>
          <p>Col. Miguel De La Madrid</p>
          <p>C.P. 09698 Iztapalapa, CDMX</p>
        </div>

        {/* Contacto */}
        <div className="text-sm leading-6">
          <p>Cel: 5514958244</p>
          <p>TEL. OFICINA: 5558325989</p>
          <p>Whatsapp: 5514958244</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Comercializadora PAT-YUBA. Todos los derechos reservados.
      </div>

    </footer>
  )
}

export default Footer
