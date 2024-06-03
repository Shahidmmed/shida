/* import { useEffect, useRef } from "react";
const useAppearOnScroll = (selector: string) => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // Stop observing after the element is visible
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector]);

  return elementsRef;
};

export default useAppearOnScroll; */

import { useEffect } from "react";

const useAppearOnScroll = (selectors: string[]) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting ||
          entry.target.closest('[data-state="active"]')
        ) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // Stop observing after the element is visible
        }
      });
    });

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      });
    };
  }, [selectors]);
};

export default useAppearOnScroll;
