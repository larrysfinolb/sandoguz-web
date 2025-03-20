import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Acerca del Colegio Santo Domingo de Guzmán</h1>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Colegio Santo Domingo de Guzmán"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Institución</h2>
            <p className="text-lg">Formando líderes con valores y excelencia académica desde 1965.</p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Historia</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              El Colegio Santo Domingo de Guzmán fue fundado en 1965 por un grupo de educadores visionarios
              comprometidos con la formación integral de niños y jóvenes. Desde sus inicios, la institución se ha
              destacado por su enfoque en valores dominicanos y excelencia académica.
            </p>
            <p className="mb-4">
              A lo largo de más de cinco décadas, el colegio ha evolucionado constantemente, adaptándose a los cambios
              educativos y tecnológicos, pero manteniendo siempre su esencia y compromiso con la formación de ciudadanos
              íntegros y preparados para los desafíos del mundo contemporáneo.
            </p>
            <p>
              Hoy, SanDoguz es reconocido como una institución líder en educación, con egresados destacados en diversos
              campos profesionales tanto a nivel nacional como internacional.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Historia del colegio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Misión</h2>
            <p>
              Formar integralmente a niños y jóvenes con sólidos valores éticos, morales y cristianos, mediante una
              educación de calidad que desarrolle competencias académicas, habilidades sociales y conciencia ciudadana,
              preparándolos para contribuir positivamente a la sociedad y enfrentar los desafíos del mundo
              contemporáneo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Visión</h2>
            <p>
              Ser una institución educativa de referencia, reconocida por su excelencia académica, formación en valores
              y compromiso con la innovación pedagógica, que prepare líderes capaces de transformar positivamente su
              entorno y contribuir al desarrollo sostenible de la sociedad.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Instalaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Aulas modernas" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Aulas Modernas</h3>
              <p className="text-gray-600">
                Espacios equipados con tecnología educativa de vanguardia para facilitar el aprendizaje interactivo.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Laboratorios" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Laboratorios</h3>
              <p className="text-gray-600">
                Laboratorios de ciencias, informática e idiomas completamente equipados para el aprendizaje práctico.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Áreas deportivas" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Áreas Deportivas</h3>
              <p className="text-gray-600">
                Canchas polideportivas, piscina y espacios para actividades físicas que promueven el desarrollo
                integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Logros Institucionales</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Acreditación Internacional</h3>
                <p className="text-gray-600">Reconocimiento por organismos internacionales por la calidad educativa.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Premios en Olimpiadas Académicas</h3>
                <p className="text-gray-600">
                  Destacada participación en competencias nacionales e internacionales de matemáticas, ciencias y
                  robótica.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Reconocimiento por Innovación Educativa</h3>
                <p className="text-gray-600">
                  Implementación de metodologías pedagógicas innovadoras y uso efectivo de tecnología en el aula.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Excelencia en Pruebas Nacionales</h3>
                <p className="text-gray-600">
                  Resultados sobresalientes en evaluaciones estandarizadas a nivel nacional.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

