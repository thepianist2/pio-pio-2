import React from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from './UserContext';
import { TextField } from "@mui/material";
import { useRef, useState } from "react";

import Button from '@mui/material/Button';

const Login = () => {
  const referenciaUsuario = useRef();
  const referenciaContrasenya = useRef();
  const navegar = useNavigate();
  const { setToken } = useContext(UserContext);
  const [error, setError] = useState(false);


  const onLoginClick = async () => {
    const rawResponse = await fetch('https://pio-pio.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: referenciaUsuario.current.value, password: referenciaContrasenya.current.value })
    });
    const content = await rawResponse.json();
    if (content.ok === true) {
      setToken(content.token);
      setError(false);
      navegar("/home");
    } else {
      setError(true);
    }
  };

  const onClickRegistro = () => {
    navegar("/registro");
  };

  const onClickOlvidePass = () => {
    navegar("/olvidecontrasena");
  };

  return (
    <div className="text-align ancho100 altura-centro">
      <h1>Haz login</h1>
      <TextField inputRef={referenciaUsuario} className="registros" id="Usuario" label="Usuario" variant="filled"></TextField>
      <br />
      <TextField type="password" inputRef={referenciaContrasenya} className="registros" id="Contrasena" label="Contraseña" variant="filled"></TextField>
      {error === true ? <p style={{ color: 'red' }}>Datos incorrectos!</p> : ''}
      <br />
      <br />
      <Button onClick={onLoginClick} className="back-corporativo" variant="contained">login</Button>
      <br />
      <br />
      <Button onClick={onClickOlvidePass} className="color-corporativo border-corporativo" variant="outlined" >Olvidé contraseña</Button>

      <h1>¿No estás registrado?</h1>

      <Button onClick={onClickRegistro} className="back-corporativo" variant="contained">REGISTRATE</Button>
    </div>
  );
};


export default Login