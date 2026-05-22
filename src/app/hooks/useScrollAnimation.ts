import { useEffect, useRef, useState } from "react";

type UseScrollAnimationReturn<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
};

export function useScrollAnimation<T extends HTMLElement>(
  threshold = 0.3,
): UseScrollAnimationReturn<T> {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
