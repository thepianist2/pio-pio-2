import React from "react";
import { useContext, useEffect, useState } from "react";

import { UserContext } from './UserContext';

//import { Container, TextField } from "@mui/material";


const Home = () => {
  const { token } = useContext(UserContext);
  const [peticionRealizada, setPeticionRealizada] = useState(false);
  const [pios, setPios] = useState([]);
  const [piosUsername, setPiosUsername] = useState([]);
  const [piosProfileImage, setPiosProfileImage] = useState([]);

  useEffect(async () => {
    if (peticionRealizada === false) {
      setPeticionRealizada(true);
      const rawResponse = await fetch('https://pio-pio.herokuapp.com/api/all-pios/0');
      const content = await rawResponse.json();

      let promesasUserName = [];
      for (let i = 0; i < content.length; i++) {
        promesasUserName.push(fetch('https://pio-pio.herokuapp.com/api/user/' + content[i].idUser + '/username', {
          headers: {
            'access-token': token
          }
        }));
      }

      let resolucionPromesa = await Promise.all(promesasUserName);
      let promesasJson = resolucionPromesa.map(promesa=>promesa.json())
      let resultadoJSONUsername = await Promise.all(promesasJson);

      //imagenes

      let promesasImagenes = [];
      for (let i = 0; i < content.length; i++) {
        promesasImagenes.push(fetch('https://pio-pio.herokuapp.com/api/user/' + content[i].idUser + '/profileImage', {
          headers: {
            'access-token': token
          }
        }));
      }

      let resolucionPromesaImg = await Promise.all(promesasImagenes);
      let promesasJsonImg = resolucionPromesaImg.map(promesa=>promesa.json())
      let resultadoJSONProfileImage = await Promise.all(promesasJsonImg);

      
      console.log(content);
      console.log(resultadoJSONUsername);
      console.log(resultadoJSONProfileImage);

      setPiosUsername(resultadoJSONUsername);
      setPiosProfileImage(resultadoJSONProfileImage);
      setPios(content);
    }
  }, [peticionRealizada]);


  if (typeof token !== 'undefined') {
    return <h1>Está logado</h1>
  } else {

    return <ul>
      {pios.map((pio, index) => {
        return <li key={pio.id}>
          <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={piosProfileImage[index].profileImage}/>
          username:{piosUsername[index].username}<br></br>
          {pio.text}
          {pio.img !== 'undefined' ? <img src={pio.img} /> : ''}
          {pio.video !== 'undefined' ? <video src={pio.video} autoPlay muted /> : ''}
        </li>
      })}
    </ul>;
  }

  //     return (
  //         <div className="ancho100 altura-centro">
  //           {/* <Container className="div-escribir-pio">
  // <TextField className="pio flota padding-top" id="filled-textarea" 
  // label="" placeholder="Escribe tu tuit"multiline variant="filled"/>
  //           </Container>
  //            */}


  //         </div>
  //     );
};


export default Home