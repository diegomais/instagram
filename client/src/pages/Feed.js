import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const res = await axios.get('http://localhost:3333/api/posts');
      setFeed(res.data);
    };
    fetchFeed();
  }, []);

  const handleLike = id => {
    axios.post(`http://localhost:3333/api/posts/${id}/like`);
  };

  return (
    <section id='post-list'>
      {feed.map(post => (
        <article key={post._id}>
          <header>
            <div className='user-info'>
              <span>{post.author}</span>
              <span className='place'>{post.place}</span>
            </div>
            <img src={more} alt='More' />
          </header>
          <img src={`http://localhost:3333/files/${post.image}`} alt='Post' />
          <footer>
            <div className='actions'>
              <button type='button' onClick={() => handleLike(post._id)}>
                <img src={like} alt='Like' />
              </button>
              <img src={comment} alt='Comment' />
              <img src={send} alt='Send' />
            </div>
            <strong>{post.likes} likes</strong>
            <p>
              {post.description}
              <span>{post.hashtags}</span>
            </p>
          </footer>
        </article>
      ))}
    </section>
  );
};

export default Feed;
