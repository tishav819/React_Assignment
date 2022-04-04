import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const employee = {
  name: "Alan Ford",
  id: "00005152",
  apointmentdOn: 1348896220039,
  email: "alan.form@email.nl",
  phone: "+31123245678",
  status: "InProgress",
  Door: "Mark",
  Time: "1643896220039",
  image: "https://tse2.mm.bing.net/th?id=OIP.pegfGc8sWHh2_RuwiuAknwHaHZ&pid=Api&P=0&w=157&h=157",
  role: "Boltaart Bosbessen",
  summary: "Boltart met Bosbessen and van de Bijenkurf"
}




ReactDOM.render(
  <React.StrictMode>
    <App employee = {employee} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
