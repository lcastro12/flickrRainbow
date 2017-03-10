'use strict';
import React, { Component } from 'react';
export default class Foto extends Component {

  constructor(props){

    super(props);
    this.state={
       farm:'',
       sever:'',
       id:'',
       secret:''
    }
  }

  getUrl() {
        return "https://farm"+
            this.props.foto.farm +
            ".staticflickr.com/" +
            this.props.foto.server +
            "/"+
            this.props.foto.id+
            "_" +
            this.props.foto.secret +
            "_s.jpg";
    }

  render(){
    return(
      <div className="container">
      <div className="obtener"> 
      <img src={this.getUrl.bind(this)}/></div>
      </div>
      )}
  }
