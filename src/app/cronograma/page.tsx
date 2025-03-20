"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Download, Filter } from "lucide-react"
import { format, addMonths, subMonths } from "date-fns"
import { es } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface Event {
  id: number
  title: string
  date: Date
  category: "academic" | "cultural" | "sports" | "administrative"
  description: string
}

export default function CronogramaPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Inicio de Clases",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      category: "academic",
      description: "Primer día del año escolar 2023-2024",
    },
    {
      id: 2,
      title: "Reunión de Padres",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
      category: "administrative",
      description: "Reunión informativa para padres de familia",
    },
    {
      id: 3,
      title: "Torneo Deportivo Intercolegial",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      category: "sports",
      description: "Competencia deportiva con otros colegios de la región",
    },
    {
      id: 4,
      title: "Festival Cultural",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
      category: "cultural",
      description: "Presentaciones artísticas y culturales de los estudiantes",
    },
  ]

  const filteredEvents = selectedCategory ? events.filter((event) => event.category === selectedCategory) : events

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-100 text-blue-800"
      case "cultural":
        return "bg-purple-100 text-purple-800"
      case "sports":
        return "bg-green-100 text-green-800"
      case "administrative":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "academic":
        return "Académico"
      case "cultural":
        return "Cultural"
      case "sports":
        return "Deportivo"
      case "administrative":
        return "Administrativo"
      default:
        return category
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Cronograma de Actividades</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar and Filters */}
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <CardTitle className="text-center">{format(currentDate, "MMMM yyyy", { locale: es })}</CardTitle>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["D", "L", "M", "M", "J", "V", "S"].map((day, index) => (
                  <div key={index} className="text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid would go here - simplified for this example */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, index) => {
                  const day = index + 1
                  const hasEvent = events.some(
                    (event) => event.date.getDate() === day && event.date.getMonth() === currentDate.getMonth(),
                  )

                  return (
                    <div
                      key={index}
                      className={`h-10 flex items-center justify-center rounded-full text-sm ${hasEvent ? "bg-blue-100 text-blue-800 font-medium" : "hover:bg-gray-100"
                        }`}
                    >
                      {day <= 31 ? day : ""}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <Filter className="mr-2 h-4 w-4" />
                  <span className="font-medium">Filtrar por categoría</span>
                </div>

                <Select
                  onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}
                  defaultValue="all"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    <SelectItem value="academic">Académico</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="sports">Deportivo</SelectItem>
                    <SelectItem value="administrative">Administrativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Download className="mr-2 h-4 w-4" />
                Descargar Calendario
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <div className="md:w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Eventos del Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <Badge className={getCategoryColor(event.category)}>{getCategoryLabel(event.category)}</Badge>
                      </div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{format(event.date, "EEEE, d MMMM yyyy", { locale: es })}</span>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No hay eventos para mostrar con los filtros seleccionados.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

