import React, { Component } from 'react';
import Posts from './components/Post/Post.jsx';
import PostForm from './components/PostForm/PostForm.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
