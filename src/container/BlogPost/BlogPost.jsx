import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPost = () => {
    axios
      .get("http://localhost:3004/posts")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handleRemove = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      .then((res) => {
        this.getPost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPost();
  }
  render() {
    return (
      <Fragment>
        {this.state.post.map((v) => {
          return <Post data={v} remove={this.handleRemove} key={v.id} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
