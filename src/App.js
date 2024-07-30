import React, { useState } from 'react';
import Post from './Post';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://user-images.githubusercontent.com/909587/41255217-16003a28-6dc6-11e8-87ee-d25b37c7e440.png', likes: 0, comments: [] },
    { id: 2, imageUrl: 'https://sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png', likes: 0, comments: [] },
    { id: 1, imageUrl: 'https://images.creativefabrica.com/products/previews/2023/10/28/av1H9n3yb/2XNODL8hNqrn2oNFmlTZeIbqi6w-mobile.jpg', likes: 0, comments: [] },
    { id: 2, imageUrl: 'https://img.freepik.com/free-psd/cherry-blossom-flower-png-isolated-transparent-background_191095-10856.jpg', likes: 0, comments: [] },
    // Add more posts as needed
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleAddComment = (id, comment) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onLike={() => handleLike(post.id)} 
          onAddComment={(comment) => handleAddComment(post.id, comment)} 
        />
      ))}
    </div>
  );
}

export default App;