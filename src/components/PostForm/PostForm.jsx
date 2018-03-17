import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newPost } from '../../store/actions/postActions'

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
    const post = { ...this.state }
    this.props.newPost(post);
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

PostForm.propTypes = {
  newPost: PropTypes.func.isRequired,
}

export default connect(null, { newPost })(PostForm);
