import React, { Component } from 'react';
import logo from '../Images/logo24.png'
import external from '../Images/external.png'
import '../App.css';

class Header extends Component {

  render() {
    return (
      <div className="nav-menu">
        <div className="bg transition">
          <div className="container-fluid fixed">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-menu"></span>
                  </button>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/"><img src={logo} alt="Logo"></img> Sin Gluten!</a>
                    </li>
                  </ul>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/categorias">Categorías</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contactanos</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" target="_blank" href="http://www.anmat.gov.ar/Alimentos/libres_gluten/Alimentos_Libres_de_Gluten.asp" rel="noopener noreferrer"><img src={external} alt="Icono redirect"></img>  ANMAT</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;