import React, { Component } from 'react';
import '../App.css'


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      received: false,
      data: {}
    };
  }

  render() {
    console.log(this.props.result)
    let props = this.props.result 
    let nombre = ''
    let marcaTitulo = ''
    let marcaDesc = ''
    if (props.nombre_comercial === "No registra" || props.nombre_comercial === "---") {
      nombre = props.marca
    }
    else { nombre = props.nombre_comercial
    marcaTitulo = ''
    marcaDesc = props.marca + ". "
    }
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        {/* eslint-disable-next-line */}
        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
        <div className="card-body">
          <h4 className="card-title">
            {/* eslint-disable-next-line */}
            <a href="#">{nombre} {marcaTitulo}</a>
          </h4>
          <p className="card-text">{marcaDesc} {props.denominacion_venta}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Product;
