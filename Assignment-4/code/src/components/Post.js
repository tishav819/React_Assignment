import React from "react";

export default function Post({ obj }) {
  const { name, location, likes, description, PostImage } = obj;
  console.log(obj);
  return (
    <div className="card">
      <div className="head">
        <div className="name">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <div className="more">...</div>
      </div>

      <div>
        <img src={require(`../Mock_data${PostImage}`)} alt="img" width="100%" />
      </div>

      <div className="foot">
        <div>
          <span>{"\u2661"}</span>
          <span>{"\u27A2"}</span>
        </div>
        <div className="date">{String(new Date()).split("GMT")[0]}</div>
      </div>
      <div className="like-content">
        <p>{likes} likes</p>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}