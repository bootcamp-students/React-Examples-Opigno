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
        this.callAPI = this.callAPI.bind(this)
        this.getNewFact = this.getNewFact.bind(this)
        this.updateFact = this.updateFact.bind(this)
    }

    // controller
    // additional methods
    componentDidMount() {
        console.log("App successfully Loaded!")
    }
    componentDidUpdate() {
        console.log("App successfully Updated!")
    }
    async callAPI() {
        const cat_API_URL = "https://catfact.ninja/fact"

        // Make a request for a user with a given ID
        let res = await axios.get(cat_API_URL)
        return res.data
    }
    async createNewFact() {
        const newFact = await this.callAPI()
        this.setState({
            catFactsArr: [...this.state.catFactsArr, { ...newFact, id: Date.now() }]
        })
    }
    async getNewFact() {
        const catFactObj_API = await this.callAPI()
        this.setState({
            catFactObj: catFactObj_API
        })
    }
    async updateFact(factID) {
        // on click of a specific fact, update the parent array to have a new fact
        const catFactObj_API = await this.callAPI()
        
        this.setState(prevState => {

            let foundIndex = prevState.catFactsArr.findIndex(item => item.id === factID);

            const newArr = [...prevState.catFactsArr];

            newArr[foundIndex] = {
                ...prevState.catFactsArr[foundIndex],
                ...catFactObj_API
            }
            return {
                catFactsArr: newArr
            }
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
                    {this.state.catFactsArr.map(catFactObj => {
                        return <Fact key={catFactObj.id} updateFact={this.updateFact} catFactObj={catFactObj} />
                    })}
                </ul>
            </div>
        )
    }
}
export default App;