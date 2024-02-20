import React from "react";
const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.user}</p>
      <div className="imageContainer">
        <img src={data.largeImageURL} alt="" />
      </div>
      <p>
        Download here :{" "}
        <a target="_blank" href={data.largeImageURL}>
          Click
        </a>
      </p>
    </div>
  );
};

export default Picture;
