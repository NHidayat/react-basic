import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="" />
      </div>
      <div className="content">
        <span className="title">{props.title}</span>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default Post;
