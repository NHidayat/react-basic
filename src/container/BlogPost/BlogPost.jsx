import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    isUpdate: false,
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
        console.log(error.response);
      });
  };

  handleUpdate = (data) => {
    this.setState({
      formPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    let newFormPost = { ...this.state.formPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      newFormPost["id"] = timeStamp;
    }
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
        this.setState({
          formPost: {
            userId: "1",
            id: "",
            title: "",
            body: "",
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  putData() {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formPost.id}`,
        this.state.formPost
      )
      .then((res) => {
        this.getPost();
        this.handleCancel();
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleSubmit = () => {
    if (!this.state.isUpdate) {
      this.postData();
    } else {
      this.putData();
    }
  };

  handleCancel = () => {
    this.setState({
      isUpdate: false,
      formPost: {
        userId: "1",
        id: "",
        title: "",
        body: "",
      },
    });
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
          <input
            type="text"
            name="title"
            onChange={this.handleFormChange}
            value={this.state.formPost.title}
          />
          <label htmlFor="">Body Content</label>
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="ad.."
            onChange={this.handleFormChange}
            value={this.state.formPost.body}
          ></textarea>
          {!this.state.isUpdate && (
            <button className="btn-submit" onClick={this.handleSubmit}>
              Add
            </button>
          )}
          {this.state.isUpdate && (
            <Fragment>
              <button className="btn-update" onClick={this.handleSubmit}>
                Update
              </button>
              <button className="btn-remove" onClick={this.handleCancel}>
                Cancel
              </button>
            </Fragment>
          )}
        </div>
        {this.state.post.map((v) => {
          return (
            <Post
              data={v}
              remove={this.handleRemove}
              update={this.handleUpdate}
              key={v.id}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
