import * as React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Hello from './pages/Hello';
import Home from './pages/home';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Notification from './pages/Notification';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    <BrowserRouter>  
      <Routes>  
        <Route exact path = "/" element = {<Hello/>}/> 
        <Route path="/home" element = {<Home/>}/>
        <Route path="/overview" element = {<Overview/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/wallet" element = {<Wallet/>}/>
        <Route path="/notifications" element = {<Notification/>}/>
        <Route path="/settings" element = {<Settings/>}/>
      </Routes>                                          
    </BrowserRouter>
    </>
  );
}

export default App;
