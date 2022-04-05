import React from 'react'

export default function Post(props) {
  return (
    <div className='Main_container'>
      <div className='Toppart'>
          <p className='name'>{props.name}</p>
          <p className='loc'>{props.location}</p>
          <h1 className='dots'>...</h1>
      </div>
      <div className='middlepart'>
          <img src = {props.PostImage} alt="P1" />
      </div>
      <div className='next_part'>
          <p className='like_one'>❤️️ 👍</p>
          <p className='date'>{props.date}</p>
      </div>
      <div>
          <p className='like'>{props.likes} Likes</p>
          <h3>{props.description}</h3>
      </div>
    </div>
  );
};
