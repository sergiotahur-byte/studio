'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface ScrollRevealWrapperProps {
  children: ReactNode;
}

const ScrollRevealWrapper = ({ children }: ScrollRevealWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="scroll-reveal">
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
