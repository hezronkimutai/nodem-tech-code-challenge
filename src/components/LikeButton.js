import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    likes: 100,
    liked: false,
  }

  like = (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + (this.state.liked ? -1 : 1),
      liked: !this.state.liked,
    })
  }

  render() {
    const { likes, liked } = this.state;

    const buttonClassName = cx('like-button', { liked });

    return (
      <>
        <h2>Like Button</h2>
        <button
          className={buttonClassName}
          onClick={this.like}
        >
          Like
          <span className="like-counter">{likes}</span>
        </button>
      </>
    );
  }
}
