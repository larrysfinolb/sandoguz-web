import { useState, useEffect } from "react"
import type { Staff } from "@/services/staff"
import { getStaff } from "@/services/staff"

export const useStaff = () => {
  const [staff, setStaff] = useState<Staff[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchStaff = async () => {
      setLoading(true)
      try {
        const data = await getStaff()
        setStaff(data)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStaff()
  }, [])

  return { staff, loading, error }
}