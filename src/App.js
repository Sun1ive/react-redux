import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Post/Post.jsx';
import PostForm from './components/PostForm/PostForm.jsx';
import './App.css';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
