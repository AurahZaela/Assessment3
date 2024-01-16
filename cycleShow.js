import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types"; 

//is used to compare all the props and states as we do in should component update
export default class HomeComponent extends PureComponent {

//export default class HomeComponent extends Component {

    //Creation Life Cycle Methods
    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components


        this.intervalObj = ""

        //creating reference elements to access directly when we need
        this.address = React.createRef()
        this.age = React.createRef()
    }

componentDidMount(){
    this.callInterval()      
    
    // setTimeout(() => {
    //     this.address.current.value = "Address Changed"
    //     this.age.current.value = "Age Changed"
    //     this.age.current.focus();
    // }, 3000);
}

callInterval = ()=>{

}

componentWillUnmount(){
    console.log("Component is unmounted")
    clearInterval(this.intervalObj)
}

textChange = (evt)=>{
    let target = evt.target;
    let classList = evt.target.classList;


    if (classList.contains("userName")) {
        this.setState({
            userName : target.value
        })    
    } else {
        this.setState({
            userSession : target.value
        })
    }

    evt.preventDefault()
}

formSubmit = (evt)=>{
    let address = this.address.current.value
    let age = this.age.current.value

    this.setState({address, age})

    evt.preventDefault()
}



getSnapshotBeforeUpdate(prevState, prevProps){
    console.log("getSnapshotBeforeUpdate");
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
    return {
        prevState,
        prevProps
    }
}

componentDidUpdate(prevState, prevProps){
    console.log("componentDidUpdate");
    console.log("prevState",prevState);
    console.log("prevProps", prevProps);


}
}