import * as React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Hello from './Hello';
import Home from './home';

function App() {
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route exact path = "/" element = {<Hello/>}/> 
        <Route path="/home" element = {<Home/>}/>
      </Routes>                                          
    </BrowserRouter>
  );
}

export default App;
