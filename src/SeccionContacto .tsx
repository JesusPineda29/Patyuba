import { MapPin, Phone, Smartphone, MessageCircle, Mail, Clock, Send } from 'lucide-react';

const SeccionContacto = () => {
  return (
    <section
  className="backdrop-blur-xl border border-pink-200/50 rounded-3xl p-12 shadow-2xl shadow-pink-100/50 relative overflow-hidden"
  style={{
    backgroundImage: "url('contacto.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header con animación */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hablemos
          </h2>
      
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Panel de información de contacto */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta principal de contacto */}
            <div className="bg-white/80 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-8 shadow-2xl shadow-pink-100/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Send className="w-8 h-8 text-pink-500 mr-3" />
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {/* Dirección */}
                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300/50 hover:border-pink-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-3 rounded-xl shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                        Nuestra Oficina
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Av. Insurgentes Sur 1234<br />
                        Col. Del Valle, CDMX<br />
                        C.P. 03100, México
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teléfonos en grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Oficina */}
                  <a href="tel:+525555551234" className="group">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300/50 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-105">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4 rounded-xl shadow-lg mb-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        Oficina
                      </h4>
                      <p className="text-blue-600 font-semibold text-lg">
                        +52 55 5555 1234
                      </p>
                    </div>
                  </a>

                  {/* Celular */}
                  <a href="tel:+525551234567" className="group">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 border border-green-300/50 hover:border-green-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-200/50 hover:scale-105">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-xl shadow-lg mb-4">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                        Celular
                      </h4>
                      <p className="text-green-600 font-semibold text-lg">
                        +52 55 1234 5678
                      </p>
                    </div>
                  </a>
                </div>

                {/* WhatsApp y Email en grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <a href="https://wa.me/525551234567" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300/50 hover:border-green-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-200/50 hover:scale-105">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-xl shadow-lg mb-4">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                        WhatsApp
                      </h4>
                      <p className="text-green-600 font-semibold text-lg">
                        Chatea ahora
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:contacto@patyuba.com" className="group">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-300/50 hover:border-purple-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-xl shadow-lg mb-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        Email
                      </h4>
                      <p className="text-purple-600 font-semibold text-lg">
                        Envía un correo
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 backdrop-blur-xl border border-orange-200/50 rounded-3xl p-8 shadow-2xl shadow-orange-100/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-7 h-7 text-orange-500 mr-3" />
                Horarios de Atención
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                  <span className="font-semibold text-gray-800">Lunes - Viernes</span>
                  <span className="text-orange-600 font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                  <span className="font-semibold text-gray-800">Sábados</span>
                  <span className="text-orange-600 font-bold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                  <span className="font-semibold text-gray-800">Domingos</span>
                  <span className="text-red-500 font-bold">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa mejorado */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-8 shadow-2xl shadow-pink-100/50 h-full">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <MapPin className="w-8 h-8 text-pink-500 mr-3" />
                Encuéntranos Aquí
              </h3>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[700px] group">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent z-10 pointer-events-none"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.2872686947567!2d-99.17965268507516!3d19.373094686913298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Insurgentes%20Sur%2C%20Del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1642692846342!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
               
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación PATYUBA"
                  className="transition-all duration-500 group-hover:scale-105"
                ></iframe>
              </div>

              {/* Información adicional del mapa */}
              <div className="mt-6 p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl border border-pink-200/50">
                <p className="text-gray-600 text-center">
                  <span className="font-semibold text-gray-800">📍 Fácil acceso</span> desde cualquier punto de la ciudad
                  <br />
                  <span className="text-pink-600">Estacionamiento disponible</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
 








 
      </div>
    </section>
  );
};

export default SeccionContacto;