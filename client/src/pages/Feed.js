import React from 'react';
// import PropTypes from 'prop-types';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

const Feed = props => {
  return (
    <section id='post-list'>
      <article>
        <header>
          <div className='user-info'>
            <span>Diego Mais</span>
            <span className='place'>Brazil</span>
          </div>
          <img src={more} alt='More' />
        </header>
        <img
          src='http://localhost:3333/files/f3101e4baf7ac3a7b9c8516bb1c177b5-logo.jpg'
          alt='Post'
        />
        <footer>
          <div className='actions'>
            <img src={like} alt='Like' />
            <img src={comment} alt='Comment' />
            <img src={send} alt='Send' />
          </div>
          <strong>900 likes</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            vero.
            <span>#react #node #top</span>
          </p>
        </footer>
      </article>
      <article>
        <header>
          <div className='user-info'>
            <span>Diego Mais</span>
            <span className='place'>Brazil</span>
          </div>
          <img src={more} alt='More' />
        </header>
        <img
          src='http://localhost:3333/files/f3101e4baf7ac3a7b9c8516bb1c177b5-logo.jpg'
          alt='Post'
        />
        <footer>
          <div className='actions'>
            <img src={like} alt='Like' />
            <img src={comment} alt='Comment' />
            <img src={send} alt='Send' />
          </div>
          <strong>900 likes</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            vero.
            <span>#react #node #top</span>
          </p>
        </footer>
      </article>
    </section>
  );
};

// Feed.propTypes = {};

export default Feed;
