"use client"

import { useState } from "react"
import { Download, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ClassSchedule {
  id: string
  day: string
  time: string
  subject: string
  teacher: string
  room: string
}

export default function HorariosPage() {
  const [selectedGrade, setSelectedGrade] = useState("1")
  const [selectedSection, setSelectedSection] = useState("A")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample schedule data
  const scheduleData: Record<string, Record<string, ClassSchedule[]>> = {
    "1": {
      A: [
        { id: "1A1", day: "Lunes", time: "7:30 - 8:20", subject: "Matemáticas", teacher: "Prof. García", room: "101" },
        {
          id: "1A2",
          day: "Lunes",
          time: "8:20 - 9:10",
          subject: "Lengua Española",
          teacher: "Prof. Rodríguez",
          room: "101",
        },
        {
          id: "1A3",
          day: "Lunes",
          time: "9:10 - 10:00",
          subject: "Ciencias Naturales",
          teacher: "Prof. Martínez",
          room: "Lab 1",
        },
        {
          id: "1A4",
          day: "Lunes",
          time: "10:20 - 11:10",
          subject: "Educación Física",
          teacher: "Prof. Sánchez",
          room: "Cancha",
        },
        { id: "1A5", day: "Lunes", time: "11:10 - 12:00", subject: "Inglés", teacher: "Prof. Johnson", room: "101" },
        {
          id: "1A6",
          day: "Martes",
          time: "7:30 - 8:20",
          subject: "Ciencias Sociales",
          teacher: "Prof. López",
          room: "101",
        },
        { id: "1A7", day: "Martes", time: "8:20 - 9:10", subject: "Matemáticas", teacher: "Prof. García", room: "101" },
        { id: "1A8", day: "Martes", time: "9:10 - 10:00", subject: "Artes", teacher: "Prof. Díaz", room: "Taller" },
      ],
      B: [
        {
          id: "1B1",
          day: "Lunes",
          time: "7:30 - 8:20",
          subject: "Lengua Española",
          teacher: "Prof. Rodríguez",
          room: "102",
        },
        { id: "1B2", day: "Lunes", time: "8:20 - 9:10", subject: "Matemáticas", teacher: "Prof. García", room: "102" },
        { id: "1B3", day: "Lunes", time: "9:10 - 10:00", subject: "Inglés", teacher: "Prof. Johnson", room: "102" },
      ],
    },
    "2": {
      A: [
        {
          id: "2A1",
          day: "Lunes",
          time: "7:30 - 8:20",
          subject: "Ciencias Naturales",
          teacher: "Prof. Martínez",
          room: "201",
        },
        { id: "2A2", day: "Lunes", time: "8:20 - 9:10", subject: "Matemáticas", teacher: "Prof. García", room: "201" },
        {
          id: "2A3",
          day: "Lunes",
          time: "9:10 - 10:00",
          subject: "Lengua Española",
          teacher: "Prof. Rodríguez",
          room: "201",
        },
      ],
    },
  }

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
  const timeSlots = ["7:30 - 8:20", "8:20 - 9:10", "9:10 - 10:00", "10:20 - 11:10", "11:10 - 12:00", "12:00 - 12:50"]

  const currentSchedule = scheduleData[selectedGrade]?.[selectedSection] || []

  const filteredSchedule = searchQuery
    ? currentSchedule.filter(
      (item) =>
        item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.room.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    : currentSchedule

  // Organize schedule by day for the weekly view
  const scheduleByDay: Record<string, Record<string, ClassSchedule>> = {}

  days.forEach((day) => {
    scheduleByDay[day] = {}
    timeSlots.forEach((time) => {
      const classItem = currentSchedule.find((item) => item.day === day && item.time === time)
      if (classItem) {
        scheduleByDay[day][time] = classItem
      }
    })
  })

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    alert("Descargando horario en formato PDF...")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Horarios de Clases</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Seleccionar Grado y Sección</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar Grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1° Grado</SelectItem>
                  <SelectItem value="2">2° Grado</SelectItem>
                  <SelectItem value="3">3° Grado</SelectItem>
                  <SelectItem value="4">4° Grado</SelectItem>
                  <SelectItem value="5">5° Grado</SelectItem>
                  <SelectItem value="6">6° Grado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar Sección" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Sección A</SelectItem>
                  <SelectItem value="B">Sección B</SelectItem>
                  <SelectItem value="C">Sección C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar por materia, profesor..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="ml-2" onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="weekly">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="weekly">Vista Semanal</TabsTrigger>
            <TabsTrigger value="list">Vista de Lista</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="weekly" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Horario</TableHead>
                      {days.map((day) => (
                        <TableHead key={day}>{day}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timeSlots.map((time) => (
                      <TableRow key={time}>
                        <TableCell className="font-medium">{time}</TableCell>
                        {days.map((day) => {
                          const classItem = scheduleByDay[day]?.[time]
                          return (
                            <TableCell key={`${day}-${time}`}>
                              {classItem ? (
                                <div>
                                  <div className="font-medium">{classItem.subject}</div>
                                  <div className="text-sm text-gray-500">{classItem.teacher}</div>
                                  <div className="text-xs text-gray-400">Aula: {classItem.room}</div>
                                </div>
                              ) : null}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              {filteredSchedule.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Día</TableHead>
                      <TableHead>Horario</TableHead>
                      <TableHead>Materia</TableHead>
                      <TableHead>Profesor</TableHead>
                      <TableHead>Aula</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchedule.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.day}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell className="font-medium">{item.subject}</TableCell>
                        <TableCell>{item.teacher}</TableCell>
                        <TableCell>{item.room}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No se encontraron horarios con los criterios seleccionados.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

