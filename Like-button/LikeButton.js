import React, { Component } from "react";
import cx from "classnames";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      liked: false,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
      liked: !prevState.liked,
    }));
  };

  render() {
    const buttonClasses = cx("like-button", { liked: this.state.liked });

    return (
      <>
        <button className={buttonClasses} onClick={this.handleLike}>
          Like | <span className="likes-counter">{this.state.likes}</span>
        </button>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color: #585858;
                    }
                    .liked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}

/* or it can be done:
import React, { useState } from 'react';
import classnames from 'classnames';

const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const buttonClasses = classnames('like-button', { liked });

  return (
    <button className={buttonClasses} onClick={handleLike}>
      Like | <span className="likes-counter">{likes}</span>
    </button>
  );
};

export default LikeButton;

*/
