'use client';

import { useState, useMemo } from "react";
import { useActivities } from "@/hooks/use-activities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const getCurrentMonthYear = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
};

const formatDateTime = (dateString: string | null): string => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Fecha inválida';
    }
    const formattedDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const includesTime = dateString.includes('T') || dateString.includes(':');
    if (includesTime) {
      const formattedTime = date.toLocaleTimeString('es-ES', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      return `${formattedDate} ${formattedTime}`;
    }
    return formattedDate;
  } catch (e) {
    console.error("Error formatting date:", dateString, e);
    return 'Error al formatear';
  }
};

export default function CronogramaPage() {
  const { activities, loading, error } = useActivities();
  const [selectedMonth, setSelectedMonth] = useState<string>(getCurrentMonthYear());

  const filteredActivities = useMemo(() => {
    let processedActivities = activities;

    if (selectedMonth && activities.length > 0) {
      const [year, month] = selectedMonth.split('-').map(Number);
      processedActivities = activities.filter(activity => {
        if (!activity.date) return false;
        try {
          const activityDate = new Date(activity.date);
          if (isNaN(activityDate.getTime())) return false;
          return activityDate.getFullYear() === year && activityDate.getMonth() === month - 1;
        } catch (e) {
          console.error("Error parsing activity date:", activity.date, e);
          return false;
        }
      });
    }

    return [...processedActivities].sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      try {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } catch {
        return 0;
      }
    });
  }, [activities, selectedMonth]);

  if (error) {
    return <div className="container mx-auto p-4 text-red-600">Error al cargar el cronograma: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Cronograma de Actividades</h1>

      <div className="mb-4 max-w-xs">
        <Label htmlFor="month-filter">Filtrar por Mes:</Label>
        <Input
          id="month-filter"
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mt-1 w-auto"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Actividades para {selectedMonth ? new Date(parseInt(selectedMonth.split('-')[0]), parseInt(selectedMonth.split('-')[1]) - 1).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Todas'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Fecha y Hora</TableHead>
                <TableHead>Actividad</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton className="h-4 w-[180px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[300px]" /></TableCell>
                  </TableRow>
                ))
              ) : filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>{formatDateTime(activity.date)}</TableCell>
                    <TableCell>{activity.name ?? 'N/A'}</TableCell>
                    <TableCell>{activity.description ?? '-'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">No hay actividades programadas para este mes.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}