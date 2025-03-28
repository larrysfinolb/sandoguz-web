import { useState, useEffect } from "react"
import type { ISchedule } from "@/types/schedule"
import { getSchedule } from "@/services/schedule"

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<ISchedule[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true)
      try {
        const data = await getSchedule()
        setSchedule(data)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSchedule()
  }, [])

  return { schedule, loading, error }
}