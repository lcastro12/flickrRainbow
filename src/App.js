import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FotosRojo from './components/fotosRojo';
import FotosAzul from './components/fotosAzul';

class App extends Component {

  constructor(props){
    super(props);

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
      <input type="query" className="form-control"></input>
      </div>
      </div>
      </div>
      </div>
      </div>
      );
  }
}

export default App;
