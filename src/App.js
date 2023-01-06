import * as React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Hello from './pages/Hello';
import Home from './pages/home';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';

function App() {
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route exact path = "/" element = {<Hello/>}/> 
        <Route path="/home" element = {<Home/>}/>
        <Route path="/overview" element = {<Overview/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/wallet" element = {<Wallet/>}/>
      </Routes>                                          
    </BrowserRouter>
  );
}

export default App;
