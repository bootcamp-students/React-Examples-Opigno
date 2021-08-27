import Square from "./Square";

function help(props) {
    console.log(`The following message was relayed from the maintenance room: "${props.str}"`)
}


function App() {

    // const message = { str: "i need extra WD-40" }
    // help(message)

    const num = "howdy partner";

    // render method
    return (
        <Square
            color="pink"
            size={num}
            show={true}
            className="big-header"
        >
            <div>this is a secret div, i wonder if it will show up</div>
        </Square>
    )
}

export default App;





// 1. props is an object
// 2. all attributes end up being key value pairs in the props object *
// 3. on components, native html attributes get converted to props in the object

// * the prop called "key" does not get sent when you are looping