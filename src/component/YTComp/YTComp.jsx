import React from "react";
import "./YTComp.css";

const YTComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://kit8.net/images/detailed/4/data_centre.png" alt="" />
      </div>
      <span className="title">{props.title}</span>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YTComp.defaultProps = {
  title: "Title Here",
  desc: "Desc Here",
};

export default YTComp;
