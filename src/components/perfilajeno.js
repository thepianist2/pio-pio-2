import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Avatar, TextField, TextareaAutosize } from "@mui/material";
import { borderBottom, width } from "@mui/system";



const PerfilAjeno = () => {

  return (
    <div className="ancho100 altura-centro">

      <Container className=" margen-arriba margen-izquierda10 " >
        <Container className="ancho100 padding-top altura100 ">
          <Button className="back-corporativo flota ancho49 bordefino" variant="contained"  >Seguir </Button>
          <Button className="back-corporativo flota ancho49 bordefino" variant="contained">Home</Button>
        </Container>
        <Container className="altura200 ancho100" >

          <Container className="ancho30 flota limpia">
            <Avatar className="avatar flota margin-top" alt="Tu perfil" src="/static/images/avatar/1.jpg"></Avatar>

          </Container>
          <Container className=" flota ancho49 margen-izquierda10 ancho100 flota padding-top ">
            <strong>Jorge Romero</strong>   26
            <br />
            Hola Buenas
          </Container>
        </Container>

        <Container className=" margen-izquierda4" >Seguidores 20</Container>

      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="margen-izquierda10 margen-derecha" style={{ height: "10px", borderBottom: "1px solid black" }}>
      </div>
    <div className="margen-arriba margen-izquierda10 pio ">
    <Avatar className=" flota margin-top"  style={{height:"48px", width:"48px"}} alt="Tu perfil" src="/static/images/avatar/1.jpg">


    </Avatar>
  

    </div>

    </div>
  );
};


export default PerfilAjeno