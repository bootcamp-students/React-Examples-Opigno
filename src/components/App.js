import React, { Component } from "react";
import axios from "axios"
import Fact from "./Fact";

class App extends Component {
    constructor() {
        super()
        // model
        this.state = {
            catFactsArr: []
        }
        this.createNewFact = this.createNewFact.bind(this)
    }

    // controller
    // additional methods
    componentDidMount() {
        console.log("App successfully Loaded!")
    }
    componentDidUpdate() {
        console.log("App successfully Updated!")
    }

    createNewFact() {
        this.setState({
            catFactsArr: this.state.catFactsArr.concat("new Fact")
        })
    }



    // render method
    // view
    render() {
        return (
            <div>
                <h1>Cat Fact of the Day</h1>
                <div type="button" className="btn btn-primary" onClick={this.createNewFact}>new fact</div>
                <ul>
                    {this.state.catFactsArr.map((item, index) => {
                        return <Fact key={index} updateFact={this.updateFact} />
                    })}
                </ul>
            </div>
        )
    }
}
export default App;