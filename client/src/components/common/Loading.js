import React from "react";
import spinner from "./loading.gif";
const preloaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 100000,
  backgroundColor: "#fff",
  width: "100%",
  height: "100%"
};
export default function Loading() {
  return (
    <div style={preloaderStyle}>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading gif"
      />
    </div>
  );
}
