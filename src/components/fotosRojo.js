'use strict'
import React, {Component } from 'react';
import axios from 'axios'

export default class FotoRojo extends Component{

	constructor(props){

		super(props);
		this.state={
			fotosRojo:[]
		}
	}


	render(){

		return (
			<div className='container fotosRojo'>
			</div>
			)
	}
}