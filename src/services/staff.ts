import type { IStaff } from "@/types/staff";

export const getStaff: () => Promise<IStaff[]> = async () => {
  const response = await fetch("/api/staff", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}