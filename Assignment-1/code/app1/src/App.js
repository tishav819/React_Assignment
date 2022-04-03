import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Blue from './Blue';
import Red from './Red';
import Yellow from './Yellow';
import './index.css'

const App = () => {
  return (
    <div className="container">
      <Yellow />
      <Red />
      <Blue />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
export default App;
