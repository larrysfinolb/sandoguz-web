"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useStaff } from "@/hooks/use-staff"
import { EDepartment } from "@/types/staff"

export default function PersonalPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const { staff: staffMembers, loading } = useStaff();

  const filteredStaff = staffMembers.filter((member) => {
    const matchesSearch =
      searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.position.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab = activeTab === "all" || member.department === activeTab

    return matchesSearch && matchesTab
  })

  const getDepartmentLabel = (department: string) => {
    switch (department) {
      case EDepartment.Directivo:
        return "Directivo"
      case EDepartment.Docente:
        return "Docente"
      case EDepartment.Administrativo:
        return "Administrativo"
      case EDepartment.Obrero:
        return "Obrero"
      default:
        return department
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Personal Académico</h1>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar por nombre o cargo..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="directivo">Directivos</TabsTrigger>
              <TabsTrigger value="docente">Docentes</TabsTrigger>
              <TabsTrigger value="administrativo">Administrativos</TabsTrigger>
              <TabsTrigger value="obrero">Obreros</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={member.image ?? "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                  <Badge variant="outline">{getDepartmentLabel(member.department)}</Badge>
                </div>

                <div className="space-y-2 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-sm">Formación:</h4>
                  <p className="text-sm text-gray-600">{member.education}</p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No se encontraron miembros del personal con los criterios de búsqueda.
          </div>
        )}
      </div>
    </div>
  )
}

