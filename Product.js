import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types"; 

export default class Product extends Component {
    constructor(props){ 
        super(props); 

        this.state = {
            ProductName : "Name",
            ProductPrice : 0
        }

        this.intervalObj = ""

    }



render(){

    return(
        <>
                  <form className="form" action="/api/loginUser" onSubmit={this.formSubmit}>
                    <b>Address</b>
                    <input type="text" placeholder={"Product Name"} 
                        ref={this.ProductName} maxLength={20}></input>
                    <b>Age</b>
                    <input type="text" placeholder={"Product Price"} 
                        ref={this.ProductPrice} maxLength={10}></input>

                    <button type="submit" >Save</button>
                </form>
        </>

    )

}

}



Product.propTypes = {
    ProductName : PropTypes.string.isRequired
}