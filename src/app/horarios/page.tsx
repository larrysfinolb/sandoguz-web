"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSchedule } from "@/hooks/use-schedule"

interface ScheduleImage {
  id: string
  grade: string
  imageUrl: string
  downloadUrl: string
}

export default function HorariosPage() {
  const [selectedGrade, setSelectedGrade] = useState('1')
  const { schedule } = useSchedule()

  const currentSchedule = schedule.find(schedule => schedule.grade.toString() === selectedGrade)

  // const handleDownload = () => {
  //   if (currentSchedule?.downloadUrl) {
  //     window.open(currentSchedule.downloadUrl, '_blank')
  //   }
  // }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Horarios de Clases</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Seleccionar Grado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Select value={selectedGrade.toString()} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccionar Grado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1° Grado</SelectItem>
                <SelectItem value="2">2° Grado</SelectItem>
                <SelectItem value="3">3° Grado</SelectItem>
                <SelectItem value="4">4° Grado</SelectItem>
                <SelectItem value="5">5° Grado</SelectItem>
                <SelectItem value="6">6° Grado</SelectItem>
                <SelectItem value="7">1° Año</SelectItem>
                <SelectItem value="8">1° Año</SelectItem>
                <SelectItem value="9">2° Año</SelectItem>
                <SelectItem value="10">3° Año</SelectItem>
                <SelectItem value="11">4° Año</SelectItem>
                <SelectItem value="12">5° Año</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {currentSchedule ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-4xl h-[600px] mb-6">
                {currentSchedule.scheduleImage && (
                  <Image
                    src={currentSchedule.scheduleImage}
                    alt={`Horario ${currentSchedule.name}°`}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
              {/* {currentSchedule.downloadUrl && (
                <Button onClick={handleDownload} className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Horario
                </Button>
              )} */}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No se encontró el horario para el grado seleccionado.
        </div>
      )}
    </div>
  )
}

