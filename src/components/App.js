import React, { Component } from "react";
import Square from "./Square";
// import Button from "./Button";

class App extends Component {
    constructor() {
        super()
        // model
        this.state = {
            num: 0,
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
        if (this.state.name === "Ian") {
            this.updateNames("George")
        }

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