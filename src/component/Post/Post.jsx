import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="" />
      </div>
      <div className="content">
        <span className="title">{props.data.title}</span>
        <p className="desc">{props.data.body}</p>
        <button
          className="btn-remove"
          onClick={() => props.remove(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
