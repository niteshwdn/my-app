import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/style.css";
import Mynavbar from "./modules/shares/Mynavbar";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mylandingpage from './modules/components/mylandingpage';
import Errorpage from './modules/components/Errorpage';
import Mycontactus from './modules/components/Mycontactus';
import Myabout from './modules/components/Myaboutpage';
import Myaxios from './modules/components/Myaxios';
import ProductDetails from './modules/components/ProductDetails';
import Mygraphpage from './modules/components/Mygraphpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
    <Routes>
        <Route path='/'element={<Mylandingpage/>}></Route>
        <Route path='*' element= {<Errorpage/>}/>
        <Route path='contact' element= {<Mycontactus/>}/>
        <Route path='Myabout' element= {<Myabout/>}/>
        <Route path='Myaxiosdata' element= {<Myaxios/>}/>
        <Route path='Myaxiosdata/Details/:id' element= {<ProductDetails/>}/>
        <Route path='Mygraph' element= {<Mygraphpage/>}/>
        </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
