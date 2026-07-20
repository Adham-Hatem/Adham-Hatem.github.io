import { useMemo, memo } from "react";
import "../main.css";

function Background() {
  const particles = useMemo(() => {
    const particleCount = window.innerWidth <= 768 ? 12 : 25;

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${20 + Math.random() * 20}s`,
    }));
  }, []);

  return (
    <div className="background">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(Background);
