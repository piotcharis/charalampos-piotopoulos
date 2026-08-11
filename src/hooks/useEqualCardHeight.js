import { useLayoutEffect } from "react";

export function useEqualCardHeight(containerRef, deps = []) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getCards = () => Array.from(container.querySelectorAll(".project-card"));

    const equalize = () => {
      const cards = getCards();
      if (cards.length === 0) return;

      cards.forEach((card) => {
        card.style.height = "auto";
      });
      const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    equalize();

    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", equalize);
    });

    window.addEventListener("resize", equalize);
    return () => {
      window.removeEventListener("resize", equalize);
      images.forEach((img) => img.removeEventListener("load", equalize));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
