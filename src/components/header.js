import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import { Container } from "@mui/material";



const Header = () => {
    
    return (
        <div className="header">
            
            <div className="logo-zona"><img className="logo"  alt="Pio Pio" src="./imagenes/corporativa.png"></img></div>

            <div className="tipo-empresa"><span >Pio Pio</span></div>
      
            {/* <div className="avatar-header"> <Avatar  className="avatar" alt="Tu perfil" src="/static/images/avatar/1.jpg" /></div> */}
            
    
        </div>
    );
  };


export default Header