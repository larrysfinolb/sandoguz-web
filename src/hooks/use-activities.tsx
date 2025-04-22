import { useState, useEffect } from 'react';
import type { IActivity } from '@/types/activity';
import { getActivities } from '@/services/activities';

export const useActivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const data = await getActivities();
        setActivities(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, loading, error };
};