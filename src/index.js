import React from 'react';
import ReactDOM from 'react-dom/client';
import Abm, {Contactus} from './About';
import Asx from'./About';
import Myclasscop from './Myfroms';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abm></Abm>
    <Asx></Asx>
    <Myclasscop/>
    <Contactus/>
  </React.StrictMode>
);
