import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/style.css";
import Mynavbar from "./modules/shares/Mynavbar";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mylandingpage from './modules/components/mylandingpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
    <Routes>
        <Route path='/'element={<Mylandingpage/>}></Route>
        </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
