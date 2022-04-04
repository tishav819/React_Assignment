import React from 'react';
import './App.css';
import Header from './Header';
import Orderinfo from './Orderinfo';
import Orderstatus from './Orderstatus';
import Productlist from './Productlist';



function App({employee}) {
  return (
    <div className="site-container">
    <Header employee = {employee}/>
    <Orderinfo employee = {employee}/>
    <Orderstatus employee = {employee}/>
    <Productlist employee = {employee}/>
    
    </div>
  );
}

export default App;
