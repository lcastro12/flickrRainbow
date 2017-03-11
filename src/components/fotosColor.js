'use strict';
import React, { Component } from 'react';
import Foto from './foto'
export default class FotosColor extends Component {
  constructor(props){

    super(props);
    this.state={
       fotos:[]
    }
  }


  render(){
    return(
      <div className="container">
      <ul>
      <div className="listaAzul">
      {this.state.fotos.map(foto => {
        return (
          <li key={foto._id}>
          <Foto foto={foto} />
          </li> 
          );
      })
    }
      </div>
      </ul>
      </div>
      )
  }
}