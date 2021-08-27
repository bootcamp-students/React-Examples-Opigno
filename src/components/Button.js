import React, { Component } from "react"

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = { buttonState: 0 }
    }

    componentDidMount() {
        console.log("button is mounted on the page!")
    }

    clickHandler() {
        console.log("clicked!")
        if (this.props) {
            console.log("we have the props!")
        }
    }

    render() {
        return <button onClick={this.clickHandler.bind(this)}>{this.props.children}</button>
    }
}

export default Button;