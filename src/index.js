import React from 'react';
import ReactDOM from 'react-dom/client';
import Contactus from './About';
import Myclasscop from './Myfroms';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Asd from './Mybs';
import GridComplexExample from'./Myreactbs';
import ButtonBaseDemo from './Uimatrial';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Asd/>
    <ButtonBaseDemo/>
    <GridComplexExample/>
    <Myclasscop/>
    <Contactus/>
  </React.StrictMode>
);
