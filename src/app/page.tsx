import Link from "next/link"
import Image from "next/image"
import { Calendar, GraduationCap, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SanDoguz Cloud</h1>
            <p className="text-xl md:text-2xl mb-8">Plataforma institucional para una educación sin límites</p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="#features">Explorar Plataforma</Link>
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 w-full h-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Fondo educativo"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Plataforma</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acerca del Colegio</h3>
              <p className="text-gray-600 mb-4">
                Conoce nuestra historia, misión educativa, instalaciones y logros institucionales.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/acerca">Ver Más</Link>
              </Button>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cronograma de Actividades</h3>
              <p className="text-gray-600 mb-4">
                Calendario interactivo con todas las fechas relevantes del año escolar.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/cronograma">Ver Más</Link>
              </Button>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horarios de Clases</h3>
              <p className="text-gray-600 mb-4">
                Acceso detallado a los horarios organizados por grado, materias y profesores.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/horarios">Ver Más</Link>
              </Button>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Académico</h3>
              <p className="text-gray-600 mb-4">
                Perfiles profesionales del equipo docente y administrativo del colegio.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/personal">Ver Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Estudiantes usando la plataforma"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Beneficios de SanDoguz Cloud</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Información centralizada y actualizada en tiempo real</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Acceso inmediato a horarios y calendarios desde cualquier dispositivo</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Comunicación directa con el personal académico</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Fortalecimiento del sentido de pertenencia institucional</p>
                </li>
              </ul>
              <Button className="mt-6">Conoce Más</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Accede a toda la información del Colegio Santo Domingo de Guzmán en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/acerca">Explorar Plataforma</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Link href="/contacto">Contactar Soporte</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}