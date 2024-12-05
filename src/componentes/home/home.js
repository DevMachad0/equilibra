import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      {/* Menu superior */}
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="menu">
          <span className='menu-span'>Início</span>
          <span className='menu-span'>Saldo</span>
          <span className='menu-span'>Movimentação</span>
          <span className='menu-span'>Relatório</span>
          <span className='menu-span'>Sobre</span>
        </div>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container">
        {/* Sidebar com painel */}
        <div className="sidebar">
          <div className="panel">
            <div className="panel-item panel-item-1">Componente 1</div>
            <div className="panel-item panel-item-2">Componente 2</div>
            <div className="panel-item panel-item-3">Componente 3</div>
          </div>
        </div>

        {/* Componente principal */}
        <div className="main-content">
          <h2>Conteúdo Principal</h2>
          <p>Informações a serem exibidas no conteúdo principal.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
