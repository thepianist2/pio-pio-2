
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerfilPropio from './components/perfilpropio';
import PerfilAjeno from './components/perfilajeno';
import Header from './components/header'
import Login from './components/login';
import Registro from './components/registro';
import ModificarUsuario from './components/modificarusuario';
import OlvideContrasena from './components/olvidecontrasena';
import Footer from './components/footer';
import './components/styles.css'
import UserProvider from './components/UserContext';


function App() {
  return (
    <div >
      <UserProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/perfilpropio" element={<PerfilPropio />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/perfilajeno" element={<PerfilAjeno />} />
            <Route exact path="/registro" element={<Registro />} />
            <Route exact path="/modificarusuario" element={<ModificarUsuario />} />
            <Route exact path="/olvidecontrasena" element={<OlvideContrasena />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
