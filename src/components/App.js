import Square from "./Square";
import React, { Component } from "react";

class App extends Component {

    constructor() {
        super()
        // model
        this.state = {
            name: "George",
        }
    }


    // controller
    // additional methods
    updateNames(str) {
        function stateSetter() {
            return ({
                // key that exists in state : new value that key should store
                name: str
            })
        }

//stateSetter() returns an object
// set state looks for an object

        this.setState(
            {
                // key that exists in state : new value that key should store
                name: str
            }
        )


    }



    // render method
    // view
    render() {
        if (this.state.name === "Ian") {
            this.updateNames("George")
        }

        return (
            <h1>The name of the computer is: {this.state.name}</h1>
        )
    }
}

export default App;





// 1. props is an object
// 2. all attributes end up being key value pairs in the props object *
// 3. on components, native html attributes get converted to props in the object

// * the prop called "key" does not get sent when you are looping


////////

// 1. state has to be an object, since we can only have one state
// 2. must be changed with the proper methods, cannot be changed on its own, without setState