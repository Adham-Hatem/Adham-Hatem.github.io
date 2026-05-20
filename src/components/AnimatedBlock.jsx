import { useEffect, useRef } from "react";
import "../main.css";

export default function AnimatedBlock({
  children,
  index = 0,
  delay = 100,
  className = "",
  href,
}) {
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) ref.current.classList.add("visible");
    }, index * delay);

    return () => clearTimeout(timer);
  }, [index, delay]);

  return (
    <a ref={ref} href={href} target="_blank" className={`block ${className}`}>
      {children}
    </a>
  );
}
