import { useEffect } from 'react';

export default function useWatch(dependencies: any[]) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log.apply(null, dependencies);
    }
  }, dependencies);
}
