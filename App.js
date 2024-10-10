import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [tweet, setTweet] = useState('');

  const postToTwitter = async () => {
    try {
      const response = await axios.post('http://localhost:5000/post-to-twitter', { tweet });
      console.log(response.data);
    } catch (error) {
      console.error('Error posting to Twitter:', error);
    }
  };

  return (
    <div className="App">
      <h1>Social Media Management</h1>
      <input
        type="text"
        placeholder="Write a tweet..."
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <button onClick={postToTwitter}>Post to Twitter</button>
    </div>
  );
}

export default App;
