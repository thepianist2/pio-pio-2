import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TextField } from "@mui/material";

import Button from '@mui/material/Button';


const OlvideContrasena = () => {
    
    return (
        <div className="text-align ancho100 altura-centro" >
          <h1>Cambiar contraseña</h1>
       <TextField className="registros" id="Usuario" label="Usuario" variant="filled"></TextField>
      <br/>
      <TextField className="registros" id="Telefono" label="Telefono" variant="filled"></TextField>
      <br/>
      <TextField className="registros" id="Nueva Contrasena" label="Nueva contraseña" variant="filled"></TextField>
      <br/>
      <TextField className="registros" id="Confirme Contrasena" label="Confirme contraseña" variant="filled"></TextField>
      <br/>
      <br/>
      <Button className="back-corporativo" variant="contained">Restablecer contraseña</Button>
        </div>
    );
  };


export default OlvideContrasena