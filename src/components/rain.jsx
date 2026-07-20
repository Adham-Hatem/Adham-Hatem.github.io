import { useMemo, memo } from "react";
import "../catWindow.css";

function RainLayer({ dropCount = 250 }) {
  const drops = useMemo(() => {
    return Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -100}%`,
      duration: `${Math.random() * 1 + 0.5}s`,
    }));
  }, [dropCount]);

  return (
    <div className="rainLayer">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drop"
          style={{
            left: drop.left,
            top: drop.top,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  );
}

export default memo(RainLayer);
