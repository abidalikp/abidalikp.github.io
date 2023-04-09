const CircularProgress = (props) => {
  const roundCircum = 2 * 40 * Math.PI;
  const roundDraw = (props.percent * roundCircum) / 100;
  return (
    <svg
      className="round"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      strokeLinecap="round"
      strokeDasharray={roundDraw + " 999"}
      transition="all 1s ease-in-out"
      fill={"none"}
      stroke={"red"}
      strokeWidth={8}
      style={{
        transform: "rotate(-90deg)",
      }}
    >
      <circle cx="50" cy="50" r="40" />
    </svg>
  );
};

export default CircularProgress;
