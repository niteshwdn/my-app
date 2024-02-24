import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/style.css";
import Mynavbar from "./modules/shares/Mynavbar";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mylandingpage from './modules/components/Mylandingpage';
import Errorpage from './modules/components/Errorpage';
import Mycontactus from './modules/components/Mycontactus';
import Myabout from './modules/components/Myaboutpage';
import Myaxios from './modules/components/Myaxios';
import ProductDetails from './modules/components/ProductDetails';
import Mygraphpage from './modules/components/Mygraphpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylogin from './modules/auth/Mylogin';
import Service from './modules/components/Service';
import Buymobilepage from './modules/components/subrouting/Buymobilepage';
import Repairmobilepage from './modules/components/subrouting/Repairmobilepage';


const Mylazym = lazy(()=>import('./modules/components/Mylazypage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
    <Routes>
        <Route path='/' element={<Mylandingpage/>}/>
        <Route path='*' element= {<Errorpage/>}/>
        <Route path='contact' element= {<Mycontactus/>}/>
        <Route path='Myabout' element= {<Myabout/>}/>
        <Route path='Myaxiosdata' element= {<Myaxios/>}/>
        <Route path='Myaxiosdata/Details/:id' element= {<ProductDetails/>}/>
        <Route path='Mygraph' element= {<Mygraphpage/>}/>
        <Route path='registor' element= {<Myregistorpage/>}/>
        <Route path='mylogin' element= {<Mylogin/>}/>
        <Route path='myservice' element={<Service/>}>
            <Route path='buymobile' element={<Buymobilepage/>}/>
            <Route path='repair' element={<Repairmobilepage/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Route>
        <Route path='mylazy' element= {
           <Suspense fallback={<h1 className='loa'>Loading..</h1>}>
            <Mylazym/>
           </Suspense>
        }>

        </Route>
        </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
