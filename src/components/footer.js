import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';


const Footer = () => {
    
    return (
        <div className="footer">
      <span className="marca">Pio Pio app registered brand</span>
      <nav className="terminos-nav">
        
        <span className="terminos">About us</span>
       
        <span className="terminos">Terms</span>
        </nav>
        </div>
    );
  };


export default Footer