import React, { Component } from 'react'
import axios from 'axios'

class Fact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catFactObj: {},
            num: 2
        }
        this.callAPI = this.callAPI.bind(this)
        this.getNewFact = this.getNewFact.bind(this)
        this.updateFact = this.updateFact.bind(this)
    }
    async callAPI() {
        const cat_API_URL = "https://catfact.ninja/fact"

        // Make a request for a user with a given ID
        let res = await axios.get(cat_API_URL)
        return res.data
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
        // prevState => {

        //     let foundIndex = prevState.catFactsArr.findIndex(item => item.id === factID);

        //     const newArr = [...prevState.catFactsArr];

        //     newArr[foundIndex] = {
        //         ...prevState.catFactsArr[foundIndex],
        //         ...catFactObj
        //     }
        //     return {
        //         catFactObj: {
        //             ...this.state.catFactObj,
        //             ...catFactObj_API
        //         }
        //     }
        // }
        this.setState({
            catFactObj: {
                ...this.state.catFactObj,
                ...catFactObj_API
            }
        })
    }
    componentDidMount() {
        this.getNewFact()
        console.log("Fact Component successfully Loaded!")
    }
    componentDidUpdate() {
        console.log("Fact Component successfully Updated!")
    }

    // can be synchronous
    helperMethod() {
        // start at this line

        const newStateFuncObj = {
            catFactObj: { new: "4th way" }
        }
        return newStateFuncObj // end at this line
    }

    stateSetter() {
        // 1 way of setting state (Asynchronous)
        const newStateObj = {
            catFactObj: { new: "1st way" }
        }
        this.setState(newStateObj)

        // 2. consise way of the above

        this.setState({
            catFactObj: { new: "2nd way" }
        })

        // these are now Asynchronous ways to do the same thing, but with functions
        // 3. external function defined to set state
        function helper() {
            const newStateFuncObj = {
                catFactObj: { new: "3rd way" }
            }
            return newStateFuncObj
        }
        this.setState(helper())

        // 4. using a method instead of a function
        // refer to line 62
        this.setState(this.helperMethod())


        // 5. in line arrow anonymous function
        this.setState(() => {
            const newStateFuncObj = {
                catFactObj: { new: "3rd way" }
            }
            return newStateFuncObj
        })

        // 6. minified v5
        this.setState(() => ({ catFactObj: { new: "3rd way" } }))

        //7. minified v7 with previous state
        this.setState(prevState => ({ catFactObj: { ...prevState.catFactObj, id: Date.now() } }))





    }


    render() {
        return (
            <li>
                {this.state.catFactObj.fact}
            </li >
        )
    }
}

export default Fact;