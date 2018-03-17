import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = async e => {
    e.preventDefault();
    const post = { ...this.state };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const parsed = await response.json();
    console.log(parsed);
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeHandler}
              name="title"
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" value={this.state.body} onChange={this.onChangeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
