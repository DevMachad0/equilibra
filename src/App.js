import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './componentes/home/home';  // Importando o componente Home
import logo from './componentes/assets/logo.png';  // Importando a imagem
import './app.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

// Componente de Login
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usado para navegar entre as páginas

  const handleLogin = () => {
    // Aqui você pode adicionar uma verificação de login real
    // Se o login for bem-sucedido, navegue para a página principal
    if (username && password) {
      navigate('/home');  // Redireciona para a página Home
    } else {
      alert('Por favor, insira usuário e senha!');
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="logo" />
      <h1>EQUILIBRA</h1>
      <span>Seu controle financeiro pessoal!</span>

      <div className="user-input">
        <input
          type="text"
          placeholder="Seu usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="login-btn" onClick={handleLogin}>
            Entrar
          </button>
          <button className="forgot-password-btn">
            Esqueci a senha
          </button>
        </div>
      </div>
    </div>
  );
}
