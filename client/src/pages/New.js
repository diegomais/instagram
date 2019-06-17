import React, { useState } from 'react';
import axios from 'axios';

import './New.css';

const New = props => {
  const [formData, setFormData] = useState({
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  });

  const { image, author, place, description, hashtags } = formData;

  const handleImageChange = e =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    // Creating a FormData object to send file
    const data = new FormData();

    // HTML file input, chosen by user
    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    // Send data to database
    await axios.post('/api/posts', data);

    // Redirect user to root
    props.history.push('/');
  };

  return (
    <div>
      <form id='new-post' onSubmit={e => handleSubmit(e)}>
        <input type='file' onChange={e => handleImageChange(e)} />
        <input
          type='text'
          placeholder='Author'
          name='author'
          value={author}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Place'
          name='place'
          value={place}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Hashtags'
          name='hashtags'
          value={hashtags}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default New;
