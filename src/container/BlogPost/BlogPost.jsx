import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((result) => result.json())
    //   .then((res) => {
    //     this.setState({
    //       post: res,
    //     });
    //   });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <Fragment>
        {this.state.post.map((v) => {
          return <Post title={v.title} desc={v.body} key={v.id} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
