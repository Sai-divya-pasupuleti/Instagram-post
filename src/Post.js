import React, { useState } from 'react';

const Post = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  };

  const postStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    backgroundColor: '#000', // Set post background to black
    color: '#fff', // Set text color to white for readability
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const commentBoxStyle = {
    margin: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={postStyle}>
        <img src={post.imageUrl} alt="Post" style={imageStyle} />
        <div>
          <button onClick={onLike}>Like ({post.likes})</button>
        </div>
        <div>
          <form onSubmit={handleCommentSubmit}>
            <input 
              type="text" 
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
              placeholder="Add a comment"
              style={{ width: '100%' }}
            />
            <button type="submit">Comment</button>
          </form>
        </div>
        <div style={commentBoxStyle}>
          {post.comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
