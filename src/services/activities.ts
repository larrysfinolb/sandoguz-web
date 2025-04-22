import type { IActivity } from "@/types/activity";

export const getActivities: () => Promise<IActivity[]> = async () => {
  const response = await fetch("/api/activities", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
