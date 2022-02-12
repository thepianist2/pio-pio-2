import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Container, TextField } from "@mui/material";


const Home = () => {
    
    return (
        <div className="ancho100 altura-centro">
          <Container className="div-escribir-pio">
<TextField className="pio flota padding-top" id="filled-textarea" 
label="" placeholder="Escribe tu tuit"multiline variant="filled"/>
          </Container>
          
         
        
        </div>
    );
  };


export default Home