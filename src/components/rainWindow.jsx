import "../catWindow.css";

function WindowDrops({ dropCount = 20 }) {
  const drops = Array.from({ length: dropCount });

  return (
    <div className="windowDropsContainer">
      {drops.map((_, i) => {
        const left = Math.random() * 100 + "%";
        const top = Math.random() * 100 + "%";
        const delay = Math.random() * 2 + "s";
        const duration = Math.random() * 1 + 1 + "s";

        return (
          <div
            key={i}
            className="windowDrop"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        );
      })}
    </div>
  );
}

export default WindowDrops;
