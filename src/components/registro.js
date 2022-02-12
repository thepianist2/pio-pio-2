import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Registro = () => {
  let navegar = useNavigate();
  /*   const [RegistroCompleto,setRegistroCompleto] = useState(false); */
  const [passDiferente, setPassDiferente] = useState(false);
  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const referenciaNombre = useRef();
  const referenciaApellidos = useRef();
  const referenciaPassword = useRef();
  const referenciaPassword2 = useRef();
  const referenciaCorreo = useRef();
  const referenciaTelefono = useRef();
  const referenciaFechaNacimiento = useRef();
  const referenciaImagen = useRef();


  const _dameFormatTimeStamp = (fecha) => {
    let separados = fecha.split('-');
    let aino = separados[0];
    let mes = separados[1] - 1;
    let dia = separados[2];
    return new Date(aino, mes, dia).getTime();
  }


  const onclickDatos = async () => {
    setLoading(true);
    setError(false);
    const data = new FormData();
    data.append('username', referenciaCorreo.current.value);
    data.append('nombre', referenciaNombre.current.value);
    data.append('apellidos', referenciaApellidos.current.value);
    data.append('fechaNacimiento', _dameFormatTimeStamp(referenciaFechaNacimiento.current.value));
    data.append('telefono', referenciaTelefono.current.value);
    data.append('password', referenciaPassword.current.value);

    if (referenciaImagen.current.files.length > 0) {
      data.append('profileImage', referenciaImagen.current.files[0], referenciaImagen.current.files[0].name);
    }

    const rawResponse = await fetch(
      'https://pio-pio.herokuapp.com/api/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      }
    );

    const content = await rawResponse.json();
    setLoading(false);
    if(content.ok === true) {
      navegar("/login");
    } else {
      setError(true);
    }
  }

  const onChangePass = () => {
    if (referenciaPassword.current.value !== referenciaPassword2.current.value) {
      setPassDiferente(true);
    } else {
      setPassDiferente(false);
    }
  }

  const _haCambiadoAlgo = () => {
    let username = referenciaCorreo.current.value;
    let nombre = referenciaNombre.current.value;
    let apellidos = referenciaApellidos.current.value;
    let fechaNacimiento = referenciaFechaNacimiento.current.value;
    let telefono = referenciaTelefono.current.value;
    let password1 = referenciaPassword.current.value;
    let password2 = referenciaPassword2.current.value;

    if (username.length > 3 && nombre.length > 3 && apellidos.length > 3 && fechaNacimiento.length > 3 && telefono.length > 3 && password1.length > 3 && password2.length > 3 && passDiferente === false) {
      setBotonDesactivado(false)
    } else {
      setBotonDesactivado(true);
    }
  };


  return (

    <div className="text-align ancho100 altura-centro" >

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <h1>REGISTRO</h1>
      <TextField onChange={_haCambiadoAlgo} inputRef={referenciaNombre} className="registros" id="Nombre" label="Nombre" variant="filled" inputProps={{maxLength: 20}}></TextField>
      <br />
      <TextField onChange={_haCambiadoAlgo} inputRef={referenciaApellidos} className="registros" id="Apellidos" label="Apellidos" variant="filled"></TextField>
      <br />
      <TextField onChange={_haCambiadoAlgo} inputRef={referenciaCorreo} className="registros" id="Correo" label="Correo" variant="filled"></TextField>
      <br />
      <TextField onChange={_haCambiadoAlgo} inputRef={referenciaTelefono} className="registros" id="Telefono" label="Telefono" variant="filled"></TextField><br />

      <input onChange={_haCambiadoAlgo} ref={referenciaFechaNacimiento} type="date"></input>
      <br />
      <TextField type="password" onChange={_haCambiadoAlgo} inputRef={referenciaPassword} className="registros" id="password" label="Password" variant="filled"></TextField><br />
      <TextField type="password" onChange={_haCambiadoAlgo} inputRef={referenciaPassword2} onBlur={onChangePass} className="registros" id="password" label="Repite password" variant="filled"></TextField>
      {passDiferente === true ? <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p> : ''}
      {error === true ? <p style={{ color: 'red' }}>Ha habido un error!</p> : ''}
      <br />
      <Container>Selecciona una imagen de perfil:</Container>
      <input ref={referenciaImagen} type="file" /><br />

      <br />
      <br />
      <br />
      <br />
      <Button disabled={botonDesactivado} className="back-corporativo" variant="contained" onClick={onclickDatos}>registrate</Button>
    </div>
  );
  /* } */
  /* 
  else{
    navegar to ="/home"
    return(
      
      <div>
      <h1>Registro Completo</h1>
     
       
      
      </div>
    )
  
    
  } */
}


export default Registro