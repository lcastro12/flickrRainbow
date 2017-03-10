import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
const URL="http://localhost:9000/flickr/";
import FotosColor from './components/fotosColor';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      busqueda:'',
      colors:["red","orange", "yellow", "green", "blue","indigo", "violet" ],
      fotosColor:[]
    }

  }
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="container title">
      <div className="col-md-8">
      <h1>Flickr Rainbow</h1>
      <br></br>
      <br></br>
      <p>Search what you want in Flickr and you'll see everything</p>
      <br></br>
      <h3>By Laura Castro</h3>
      </div>
      </div>
      </div>
      <br></br>
      <div className="container">
      <div className="row">
      <div className="col-md-4">
      <div className="form-group">
      <input type="query" className="form-control" busqueda={this.state.busqueda} onChange={this.obtenerTexto}></input>
      </div>
      <button type="button" className="btn btn-info" onClick={this.obtenerFotosColor.bind(this)}>Search</button>
      <FotosAzul fotosAzul={this.state.fotosAzul}/>
      </div>
      </div>
      </div>
      </div>
      );
  }


obtenerFotosAzules(color){
     axios.get(URL+ this.state.busqueda +",blue")
      .then(response => {
        this.setState({
          fotosAzul: response.data.photos.photo
        })
      });
  }

obtenerTexto(event){
  this.setState({
    busqueda:event.target.value
  });
}
}

export default App;
