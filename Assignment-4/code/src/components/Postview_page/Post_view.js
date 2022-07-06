import React from 'react';
import './Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header';
import Post from '../Post';



const Post_view=()=> {
  const [data,usedata] = useState([])

  const getData = async() => {
    let response = await fetch(`http://localhost:3004/user`);
    let acutalData = await response.json();
    usedata(acutalData);
  }
  
  useEffect(() => {getData()}, []);
  console.log(data);

  return (
    <div className="site-container">
      <Header/>
      {data.map((element) => {
        return (
          <Post 
            name = {element.name}
            location = {element.location}
            likes = {element.likes}
            description = {element.description}
            PostImage = {element.PostImage}
            date = {element.date}
          />
        )
      })}
    </div>
  );
}

export default Post_view;