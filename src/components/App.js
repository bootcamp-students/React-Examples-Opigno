import Square from "./Square";
import React, { Component } from "react";

class App extends Component {

    constructor() {
        super()
        // model
        this.state = {
            name: "George",
        }
        // this.updateNames = this.updateNames.bind(this)
        // this.clickHelperMethod = this.clickHelperMethod.bind(this)
    }


    // controller
    // additional methods
    updateNames(str) {

        this.setState(
            {
                // key that exists in state : new value that key should store
                name: str
            }
        )


    }

    clickHelperMethod(e) {
        console.log(e)
        this.updateNames("Joe")
    }



    // render method
    // view
    render() {
        if (this.state.name === "Ian") {
            this.updateNames("George")
        }

        ///////////////
        // 1. multiline named function
        // let this_ = this

        // function clickHelper() {
        //     this_.updateNames("Joe")
        // }
        ///////////////
        // 2. in line, named function
        // const nameclicker = () => this.updateNames("Joe")
        ///////////////
        // 3. in line, anonymous function (to be used in jsx only)
        // () => this.updateNames("Joe")
        ///////////////
        // 4. method defined as arrow function
        /*
            clickHelperMethod = (e) => {
                console.log(e)
                this.updateNames("Joe")
            }
        */
        ///////////////
        // 5. method bound in constructor
        /*
        in constructor, line 12
        _______
            clickHelperMethod(e){
                console.log(e)
                this.updateNames("Joe")
            }
        */
       ///////////////
        // 6. method bound in jsx render, currently used in render on line 88
       ///////////////




        let str = "Joe"

        return (
            <>
                <h1>The name of the computer is: {this.state.name}</h1>
                <button onClick={this.updateNames.bind(this, str)}>click me to change the name</button>

            </>
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