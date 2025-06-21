import { useEffect, useRef } from 'react';

export const useInfiniteScroll = (loadMore, loading) => {
  const observerRef = useRef();

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    }, { threshold: 1.0 });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loading, loadMore]);

  return observerRef;
};
