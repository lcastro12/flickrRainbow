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
      <div className="container title">
      <div className="col-md-8">
      <h>Flickr Rainbow</h>
      <br></br>
      <p>By Laura Castro</p>
      </div>
      </div>
      <br></br>
      <div className="container">
      <div className="form-group">
      <input type="query" className="form-control"></input>
      </div>
      </div>
      </div>
      );
  }
}

export default App;
