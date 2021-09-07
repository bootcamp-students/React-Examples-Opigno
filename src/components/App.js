import React, { Component } from "react";
import Square from "./Square"

class App extends Component {
    constructor() {
        super()
        // model
        this.state = {
            num: 5,
            name: "George",
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

    forLoopHelper() {
        let output = []
        for (let index = 0; index < this.state.colors.length; index++) {
            const color = this.state.colors[index];
            // console.log(element)
            let element = <li key={index}>{color}</li>

            output.push(element)
        }
        // console.log(output)
        return output
    }

    // render method
    // view
    render() {

        // using a map helper function
        function mapHelper(item, index) {
            return <li key={index}>{item}</li>
        }



        return (
            <>
                <h1>My favorite colors (in no particular order)</h1>
                {/* usage with a for loop, see line 273 */}
                {/* <ul>
                    {this.forLoopHelper()}
                </ul> */}

                {/* usage with a mapHelper, see line 291 */}
                {/* <ul>
                    {
                        this.state.colors.map(mapHelper)
                    }
                </ul> */}
                
                {/* usage with inline arrow functions  */}
                {/* <ul>
                    {
                        this.state.colors
                            .filter(color => color.length <= 3)
                            .map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul> */}


                 {/* usage with sending data to a child  */}
                <ul>
                    {
                        this.state.colors
                            .map((item, index) => <Square key={item} colorName={item} />)
                    }
                </ul>

            </>
        )
    }
}
export default App;