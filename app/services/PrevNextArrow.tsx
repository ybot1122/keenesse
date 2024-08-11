export const NextArrow = ({ className, style, onClick }: any) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      <Chevron direction="right" />
    </button>
  );
};

export const PrevArrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className + " rounded-full bg-white"}
      style={style}
      onClick={onClick}
    >
      <Chevron direction="left" />
    </button>
  );
};

const Chevron = ({
  blue = true,
  direction = "left",
}: {
  blue?: boolean;
  direction: "left" | "right";
}) => {
  const fill = blue ? "#1470af" : "#ffffff";
  const dir = direction === "left" ? { transform: "scale(1,-1)" } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={fill}
      style={dir}
    >
      <g>
        <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
        <polygon points="13.293 7.293 8.586 12 13.293 16.707 14.707 15.293 11.414 12 14.707 8.707 13.293 7.293" />
      </g>
    </svg>
  );
};
