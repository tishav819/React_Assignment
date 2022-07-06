import React from 'react'
import { Link } from 'react-router-dom';

function Landing_page() {
  return (
    <div className='Landingpage'>
        <div>
            <img src= {require('./img.jpg')} alt = "ddd" />
        </div>
        <div className='welcome'>
        <h1>Welcome to Instaclone</h1>
        </div>
        <div className='butn'>
        <Link to= "/postview"><button>Enter</button></Link>
        </div>
      
    </div>
  );
}

export default Landing_page;
