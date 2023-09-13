import React from 'react';
import ReactDOM from 'react-dom/client';
import Abm, {Contactus} from './About';
import Asx from'./About';
import Myclasscop from './Myfroms';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Asd from './Mybs';
import GridComplexExample from'./Myreactbs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Asd/>
    <GridComplexExample/>
    <Abm></Abm>
    <Asx></Asx>
    <Myclasscop/>
    <Contactus/>
  </React.StrictMode>
);
