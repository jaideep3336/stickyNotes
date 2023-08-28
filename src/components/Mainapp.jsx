
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import App from './App';

function Mainapp() {
  return (
    <Router>
     <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/home" element={<App/>}/>
     </Routes>
    </Router>
  );
}



export default Mainapp;