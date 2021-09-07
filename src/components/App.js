import React, { Component } from "react";
import Square from "./Square";
// import Button from "./Button";

class App extends Component {
    constructor() {
        super()
        // model
        this.state = {
            num: 5,
            name: "George",
        }
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
    componentDidMount() {
        console.log("App successfully Loaded!")
    }

    componentDidUpdate() {
        // this.setState({ num: this.state.num++ })
        console.log("App successfully Updated!")
    }


    // render method
    // view
    render() {
        // if (this.state.name === "Ian") {
        //     this.updateNames("George")
        // }

        // let str = "Joe"

        // 1. - if statement (dont use, bad option - too much code, multiple returns)

        // if (this.state.num > 4) {
        //     return (
        //         <p>this shows up only when the number is greater than 4</p>
        //     )
        // }
        // else if (this.state.num === 4) {
        //     return (
        //         <p>this shows up only when the number is equal to 4</p>
        //     )
        // }
        // else {
        //     return (
        //         <p>this shows up only when the number is less than 4</p>
        //     )
        // }

        // 1.5 - switch case


        // 2. - Logical && Operator (best option)
        // return (

        // {this.state.num > 4 &&
        //     <p>this shows up only when the number is greater than 4</p>
        // }
        // {this.state.num === 4 &&
        //     <p>this shows up only when the number is equal to 4</p>
        // }
        // {this.state.num < 4 &&
        //     <p>this shows up only when the number is less than 4</p>
        // }
        // )

        // no JSX needed for the same example
        // return this.state.num > 4 && <p>this shows up only when the number is greater than 4</p>



        // 3. - ternary (good option, but difficult to read)

        // this example uses no jsx wrapping, and has a nested ternary
        // return this.state.num === 4
        //     ? <p>this shows up only when the number is equal to 4</p>
        //     : this.state.num > 4 //double nested ternary (avoid this if possible)
        //         ? <p>this shows up only when the number is greater than 4</p>
        //         : <p>this shows up only when the number is less than 4</p>

        // this example does use jsx wrapping
        return this.state.num === 4
            ? <p>this shows up only when the number is equal to 4</p>
            : <Square />




    }
}
export default App;