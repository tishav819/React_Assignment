import React from "react";
import camera from "../Mock_data/camera.png";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <h1>InstaClone</h1>
        <img
          src={camera}
          alt="camera"
          width="35px"
          height="35px"
          className="camera"
        />
      </nav>
      <hr />
    </>
  );
}