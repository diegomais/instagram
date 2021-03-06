import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import spinner from '../assets/spinner.gif';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      const res = await axios.get('/api/posts');
      setFeed(res.data);
      setLoading(false);
    };
    registerToSocket();
    fetchFeed();
  }, []);

  const registerToSocket = () => {
    const socket = io('/api');

    socket.on('post', newPost => setFeed(prevState => [newPost, ...prevState]));

    socket.on('like', likedPost =>
      setFeed(prevState =>
        prevState.map(post => (post._id === likedPost._id ? likedPost : post))
      )
    );
  };

  const handleLike = id => {
    axios.post(`/api/posts/${id}/like`);
  };

  return loading ? (
    <img className='spinner' src={spinner} alt='Loading' />
  ) : (
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
          <img src={`/files/${post.image}`} alt='Post' />
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
