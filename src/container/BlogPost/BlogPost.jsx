import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    formPost: {
      userId: "1",
      id: "",
      title: "",
      body: "",
    },
  };

  getPost = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
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
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      .then((res) => {
        this.getPost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFormChange = (event) => {
    let newFormPost = { ...this.state.formPost };
    let timeStamp = new Date().getTime();
    newFormPost["id"] = timeStamp;
    newFormPost[event.target.name] = event.target.value;
    this.setState({
      formPost: newFormPost,
    });
  };

  postData() {
    axios
      .post(`http://localhost:3004/posts`, this.state.formPost)
      .then((res) => {
        this.getPost();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleSubmit = () => {
    this.postData();
  };

  componentDidMount() {
    this.getPost();
  }
  render() {
    return (
      <Fragment>
        <div className="form-add-post">
          <div className="header">
            <span>Add Posts</span>
          </div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleFormChange} />
          <label htmlFor="">Body Content</label>
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="ad.."
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Save
          </button>
        </div>
        {this.state.post.map((v) => {
          return <Post data={v} remove={this.handleRemove} key={v.id} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
