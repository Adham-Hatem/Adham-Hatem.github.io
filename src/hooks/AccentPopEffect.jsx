import { useContext, useEffect, useRef } from "react";
import { AccentContext } from "../context/AccentContext";

function AccentPopEffect() {
  const { index } = useContext(AccentContext);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const root = document.documentElement;
    root.style.transition = "transform 0.3s ease";
    root.style.transform = "scale(1.02)";
    const timeout = setTimeout(() => {
      root.style.transform = "scale(1)";
    }, 300);

    return () => clearTimeout(timeout);
  }, [index]);

  return null;
}

export default AccentPopEffect;
