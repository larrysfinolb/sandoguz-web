import type { ISchedule } from "@/types/schedule";

export const getSchedule: () => Promise<ISchedule[]> = async () => {
  const response = await fetch("/api/schedule", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}