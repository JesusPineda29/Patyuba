import { MapPin, Phone, Smartphone, MessageCircle, Mail, Send } from 'lucide-react';

const SeccionContacto = () => {
    return (
        <section
            className="backdrop-blur-xl border border-pink-200/50 p-6 sm:p-8 md:p-12 shadow-2xl shadow-pink-100/50 relative overflow-hidden"
            style={{
                backgroundImage: "url('contacto.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            id='contacto'
        >
            {/* Elementos decorativos de fondo */}


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header con animación */}
                <div className="mb-10 sm:mb-16 md:mb-20">
                    <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent leading-tight" style={{ color: 'rgb(23, 99, 141)' }}>
                        Estamos <span style={{ color: 'rgb(203, 6, 124)' }} >aquí</span>
                    </h2>
                    <p className="text-2xl sm:text-base lg:text-2xl text-[#175c8d] max-w-md sm:max-w-xl">
                        ¡Búscanos!
                    </p>

                </div>

                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Panel de información de contacto */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Tarjeta principal de contacto */}
                        <div className="bg-white/80 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-pink-100/50">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
                                <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-500 mr-2 sm:mr-3" />
                                Información de Contacto
                            </h3>

                            <div className="space-y-4">
                                {/* Dirección */}
                                <div className="group cursor-pointer">
                                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300/50 hover:border-pink-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/50">
                                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-3 rounded-xl shadow-lg">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-base text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                                                Nuestra Oficina
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Calle Anafre Mz 393, Lote 10<br />
                                                Col. Miguel De La Madrid<br />
                                                C.P. 09698 Iztapalapa, CDMX
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Teléfonos en grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Oficina */}
                                    <a href="tel:2201388450" className="group">
                                        <div className="flex flex-col items-center p-4 rounded-2xl bg-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600 hover:scale-105">
                                            <div className="bg-blue-700 p-2 rounded-xl shadow-md mb-2">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                                                Ventas
                                            </h4>
                                            <p className="text-white font-semibold text-sm">
                                                22 0138 8450
                                            </p>
                                        </div>

                                    </a>

                                    {/* Celular */}
                                    <a href="tel:5514958244" className="group">
                                        <div className="flex flex-col items-center p-4 rounded-2xl bg-pink-400 transition-all duration-300 hover:shadow-xl hover:shadow-pink-700 hover:scale-105">
                                            <div className="bg-pink-600 p-2 rounded-xl shadow-md mb-2">
                                                <Smartphone className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                                                Teléfono
                                            </h4>
                                            <p className="text-white font-semibold text-sm">
                                                55 1495 8244
                                            </p>
                                        </div>

                                    </a>
                                </div>

                                {/* WhatsApp y Email en grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* WhatsApp */}
                                    <a href="mailto:ventas@patyuba.com" target="_blank" rel="noopener noreferrer" className="group h-full">
                                        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-lime-500 transition-all duration-300 hover:shadow-xl hover:shadow-lime-700 hover:scale-105 h-full">
                                            <div className="bg-lime-700 p-2 rounded-xl shadow-md mb-2">
                                                <MessageCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                                                ventas@patyuba.com
                                            </h4>
                                            <p className="text-white font-semibold text-sm">
                                                Envía un correo
                                            </p>
                                        </div>

                                    </a>

                                    {/* Email dividido en 2 botones */}
                                    <div className="flex flex-col gap-4">
                                        {/* Primer botón de email */}
                                        <a href="mailto:lizpatsy@patyuba.com" className="group flex-1">
                                            <div className="flex flex-col items-center p-4 rounded-2xl bg-purple-500  hover:border-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700 hover:scale-105 h-full">
                                                <div className="bg-purple-800 p-2 rounded-xl shadow-md mb-2">
                                                    <Mail className="w-5 h-5 text-white" />
                                                </div>
                                                <h4 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors text-center">
                                                    lizpatsy@patyuba.com
                                                </h4>
                                                <p className="text-white font-semibold text-sm">
                                                    Envía un correo
                                                </p>
                                            </div>
                                        </a>


                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* Mapa mejorado */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/80 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-pink-100/50 h-full">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
                                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-500 mr-2 sm:mr-3" />
                                Encuéntranos Aquí
                            </h3>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[250px] sm:h-[350px] md:h-[408px] group">
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent z-10 pointer-events-none"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.1769069661049!2d-99.00204319579542!3d19.33848923660411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d50a1a0f907%3A0x65741f2d43ebcfb1!2sAnafre%2C%20Miguel%20de%20la%20Madrid%2C%2009698%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1753406334474!5m2!1ses!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación PATYUBA"
                                    className="transition-all duration-500 group-hover:scale-105"
                                />

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SeccionContacto;