import "../catWindow.css";

function StarLayer({ starCount = 6 }) {
  const stars = Array.from({ length: starCount });

  return (
    <div className="starLayer">
      {stars.map((_, i) => {
        const left = Math.random() * 100 + "%";
        const top = Math.random() * 100 + "%";
        const size = Math.random() * 2 + 1 + "px";
        const delay = Math.random() * 3 + "s";
        const opacity = Math.random() * 0.8 + 0.2;

        return (
          <div
            key={i}
            className="star"
            style={{
              left,
              top,
              width: size,
              height: size,
              opacity,
              animationDelay: delay,
            }}
          />
        );
      })}
    </div>
  );
}

export default StarLayer;
