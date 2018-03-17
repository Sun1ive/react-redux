import React, { Component } from 'react';

class Posts extends Component {
  async componentWillMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const parsed = await response.json();
    this.setState({
      posts: parsed.slice(0, 20),
    });
  }

  state = {
    posts: [],
  };

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
