import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TextField } from "@mui/material";
import { useState } from "react";

import Button from '@mui/material/Button';


const ModificarUsuario = () => {
  const[datos, setDatos] = useState({});
  const onclickDatos=()=>{
    setDatos({nombre: "ss", apellidos:"ss", usuario: "", correo: "", telefono :"" })
    
  }
    return (
      <div className="text-align ancho100 altura-centro" >
        <h1>REGISTRO</h1>
        <TextField className="registros" id="Nombre" label="Nombre" variant="filled" ></TextField>
        <br />
        <TextField className="registros" id="Apellidos" label="Apellidos" variant="filled"></TextField>
        <br />
        <TextField className="registros" id="Usuario" label="Usuario" variant="filled"></TextField>
        <br />
        <TextField className="registros" id="Correo" label="Correo" variant="filled"></TextField>
        <br />
  
        <TextField className="registros" id="Telefono" label="Telefono" variant="filled"></TextField>
        <br />
        <br/>
        <br/>
        <Button className="back-corporativo" variant="contained" onClick={onclickDatos}>registrate</Button>
      </div>
    );
  };
  


export default ModificarUsuario