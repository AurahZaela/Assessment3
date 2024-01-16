
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import Product from "./Product";
import cycleShow from "./cycleShow"
//3
import React, { Component } from "react";


export default class Success extends Component{


constructor(props){
    super(props)

   this.state = {
    name: "Joseph Tran",
    address: "1234 Street St"
   }
}
render(){

    return(
     <>
        <h1>"Do the best you can until you know better - Maya Angelou"</h1>
        <div className="Success"></div>
        <SuccessChild name = {this.state.name} address={this.state.address}/>
        <SuccessStory name = {this.state.name}/>
        <Product/>
        <cycleShow/>
    </>
        );

    }

}
