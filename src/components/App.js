import Square from "./Square";
import React, { Component } from "react";

class App extends Component {

    constructor() {
        super()
        // model
        this.num = 35
        this.state = { date: new Date() };
    }


    // controller
    // additional methods
    help(mes) {
        console.log(`The following message was relayed from the maintenance room: "${mes.str}"`)
    }



    // render method
    // view
    render() {
        return (
            <>
                <Square
                    color="pink"
                    size={this.num}
                    show={true}
                    className="big-header"
                >
                    <div>this is a secret div, i wonder if it will show up</div>
                </Square>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default App;





// 1. props is an object
// 2. all attributes end up being key value pairs in the props object *
// 3. on components, native html attributes get converted to props in the object

// * the prop called "key" does not get sent when you are looping