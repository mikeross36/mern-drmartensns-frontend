import FadeLoader from "react-spinners/FadeLoader";

export default function Spinner() {
  return (
    <div style={loaderStyle}>
      <FadeLoader color="#ffa500" size={40} speedMultiplier={0.7} />
    </div>
  );
}

const loaderStyle = {
  width: "300px",
  height: "200px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
