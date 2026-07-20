import { useMemo, memo } from "react";
import "../catWindow.css";

function WindowDrops({ dropCount = 20 }) {
  const drops = useMemo(() => {
    return Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${Math.random() * 1 + 1}s`,
    }));
  }, [dropCount]);

  return (
    <div className="windowDropsContainer">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="windowDrop"
          style={{
            left: drop.left,
            top: drop.top,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  );
}

export default memo(WindowDrops);
