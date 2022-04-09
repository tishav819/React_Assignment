import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Landing_page from './components/Landing_page/Landing_page'
import Post_view from './components/Postview_page/Post_view'

function App() {
  return (
    <div className='Wrapper'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing_page />} />
                

                <Route path='/postview' element = {<Post_view />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
