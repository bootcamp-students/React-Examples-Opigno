import React, { Component } from "react";
import Square from "./Square"

class App extends Component {
    constructor() {
        super()
        // model
        this.state = {
            num: 5,
            currentName: "",
            names: [],
            colors: [
                "white",
                "pearl",
                "alabaster",
                "snow",
                "ivory",
                "cream",
                "eggshell",
                "cotton",
                "chiffon",
                "salt",
                "lace",
                "coconut",
                "linen",
                "bone",
                "daisy",
                "powder",
                "frost",
                "porcelain",
                "parchment",
                "rice",
                "tan",
                "beige",
                "macaroon",
                "hazelwood",
                "granola",
                "oat",
                "eggnog",
                "fawn",
                "sugar cookie",
                "sand",
                "sepia",
                "ltte",
                "oyster",
                "biscotti",
                "parmesan",
                "hazelnut",
                "sandcastle",
                "buttermilk",
                "sand dollar",
                "shortbread",
                "yellow",
                "canary",
                "gold",
                "daffodil",
                "flaxen",
                "butter",
                "lemon",
                "mustard",
                "corn",
                "medallion",
                "dandelion",
                "fire",
                "bumblebee",
                "banana",
                "butterscotch",
                "dijon",
                "honey",
                "blonde",
                "pineapple",
                "tuscan sun",
                "orange",
                "tangerine",
                "marigold",
                "cider",
                "rust",
                "ginger",
                "tiger",
                "fire",
                "bronze",
                "cantaloupe",
                "apricot",
                "clay",
                "honey",
                "carrot",
                "squash",
                "spice",
                "marmalade",
                "amber",
                "sandstone",
                "yam",
                "red",
                "cherry",
                "rose",
                "jam",
                "merlot",
                "garnet",
                "crimson",
                "ruby",
                "scarlet",
                "wine",
                "brick",
                "apple",
                "mahogany",
                "blood",
                "sangria",
                "berry",
                "currant",
                "blush",
                "candy",
                "lipstick",
                "pink",
                "rose",
                "fuchsia",
                "punch",
                "blush",
                "watermelon",
                "flamingo",
                "rouge",
                "salmon",
                "coral",
                "peach",
                "strawberry",
                "rosewood",
                "lemonade",
                "taffy",
                "bubblegum",
                "ballet slipper",
                "crepe",
                "magenta",
                "hot pink",
                "purple",
                "mauve",
                "violet",
                "boysenberry",
                "lavender",
                "plum",
                "magenta",
                "lilac",
                "grape",
                "periwinkle",
                "sangria",
                "eggplant",
                "jam",
                "iris",
                "heather",
                "amethyst",
                "raisin",
                "orchid",
                "mulberry",
                "wine",
                "blue",
                "slate",
                "sky",
                "navy",
                "indigo",
                "cobalt",
                "teal",
                "ocean",
                "peacock",
                "azure",
                "cerulean",
                "lapis",
                "spruce",
                "stone",
                "aegean",
                "berry",
                "denim",
                "admiral",
                "sapphire",
                "arctic",
                "green",
                "chartreuse",
                "juniper",
                "sage",
                "lime",
                "fern",
                "olive",
                "emerald",
                "pear",
                "moss",
                "shamrock",
                "seafoam",
                "pine",
                "parakeet",
                "mint",
                "seaweed",
                "pickle",
                "pistachio",
                "basil",
                "crocodile",
                "brown",
                "coffee",
                "mocha",
                "peanut",
                "carob",
                "hickory",
                "wood",
                "pecan",
                "walnut",
                "caramel",
                "gingerbread",
                "syrup",
                "chocolate",
                "tortilla",
                "umber",
                "tawny",
                "brunette",
                "cinnamon",
                "penny",
                "cedar",
                "grey",
                "shadow",
                "graphite",
                "iron",
                "pewter",
                "cloud",
                "silver",
                "smoke",
                "slate",
                "anchor",
                "ash",
                "porpoise",
                "dove",
                "fog",
                "flint",
                "charcoal",
                "pebble",
                "lead",
                "coin",
                "fossil",
                "black",
                "ebony",
                "crow",
                "charcoal",
                "midnight",
                "ink",
                "raven",
                "oil",
                "grease",
                "onyx",
                "pitch",
                "soot",
                "sable",
                "jet black",
                "coal",
                "metal",
                "obsidian",
                "jade",
                "spider",
                "leather"
            ]
        }
        this.updateNames = this.updateNames.bind(this)
        this.updateNameForm = this.updateNameForm.bind(this)
    }

    // controller
    // additional methods
    updateNames(e) {
        this.setState(
            {
                // key that exists in state : new value that key should store
                names: this.state.names.concat(this.state.currentName)
            }
        )
        // code to try to solve as the viewer
        // run this function when we hit enter
        // e.preventDefault()
        // clear our the name field every time we hit enter or click the button
    }

    updateNameForm(e) {
        this.setState(
            {
                // key that exists in state : new value that key should store
                currentName: e.target.value
            }
        )
        console.log(e.target.value)
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


        return (
            <>
                <h1>please sign into class today</h1>

                <label>
                    Name:
                        <input
                        type="text"
                        name="name"
                        value={this.state.currentName}
                        onChange={this.updateNameForm}
                    />
                </label>
                <button onClick={this.updateNames}>Add Name</button>

                <ol>
                    {
                        this.state.names
                            .map((item, index) => <li key={index}>{item}</li>)
                    }
                </ol>

            </>
        )
    }
}
export default App;