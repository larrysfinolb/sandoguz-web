import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Colegio Santo Domingo de Guzmán</h3>
            <p className="mb-4 text-sm">Formando líderes con valores y excelencia académica desde 1965.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="mailto:info@sandoguz.edu" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/acerca" className="hover:text-white">
                  Acerca del Colegio
                </Link>
              </li>
              <li>
                <Link href="/cronograma" className="hover:text-white">
                  Cronograma de Actividades
                </Link>
              </li>
              <li>
                <Link href="/horarios" className="hover:text-white">
                  Horarios de Clases
                </Link>
              </li>
              <li>
                <Link href="/personal" className="hover:text-white">
                  Personal Académico
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Av. Principal #123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@sandoguz.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Colegio Santo Domingo de Guzmán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}