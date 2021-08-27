import React, { Component } from "react";
import Square from "./Square";
import Button from "./Button";

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
        this.setState(
            {
                // key that exists in state : new value that key should store
                name: str
            }
        )
    }
    componentDidMount() {
        console.log("App successfully loaded!")
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
                <Button onClick={this.updateNames.bind(this, str)}>click me to change the name</Button>

            </>
        )
    }
}
export default App;