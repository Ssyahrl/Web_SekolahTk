import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

function AnimatedCounter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0);
          }
        },
      });
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

export default AnimatedCounter;