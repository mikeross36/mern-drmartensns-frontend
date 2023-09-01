import FadeLoader from "react-spinners/FadeLoader";

export default function Spinner() {
  return (
    <div style={loaderStyle}>
      <FadeLoader
        color="#ffa500"
        height={100}
        width={100}
        speedMultiplier={0.7}
      />
    </div>
  );
}

const loaderStyle = {
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
