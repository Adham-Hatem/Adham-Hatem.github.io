import "../catWindow.css";

function RainLayer({ dropCount = 250 }) {
  const drops = Array.from({ length: dropCount });

  return (
    <div className="rainLayer">
      {drops.map((_, i) => {
        const left = Math.random() * 100 + "%";
        const top = Math.random() * -100 + "%";
        const duration = Math.random() * 1 + 0.5 + "s";

        return (
          <div
            key={i}
            className="drop"
            style={{ left, top, animationDuration: duration }}
          />
        );
      })}
    </div>
  );
}

export default RainLayer;
