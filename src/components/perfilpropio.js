import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Container, Avatar, TextField } from "@mui/material";


const PerfilPropio = () => {

  return (
    <div className="ancho100 altura-centro">
     
        <Container className=" margen-arriba margen-izquierda10 " >
      <Container className="ancho100 padding-top altura100 ">
        <Button className="back-corporativo flota ancho49 bordefino" variant="contained" >Modificar Perfil</Button>
        <Button className="back-corporativo flota ancho49 bordefino" variant="contained">Salir</Button>
      </Container>
      <Container className="altura200 ancho100" >

      <Container className="ancho30 flota limpia">
        <Avatar className="avatar flota margin-top" alt="Tu perfil" src="/static/images/avatar/1.jpg"></Avatar>

      </Container>
      <Container className=" flota ancho49 margen-izquierda10 ancho100 flota padding-top ">
       <strong>Jorge Romero</strong>   26
       <br/>
       Hola Buenas
        </Container>
      </Container>
      
        <Container className=" margen-izquierda4" >Seguidores 20</Container>
        
         </Container>
         
    
    </div>
  );
};


export default PerfilPropio