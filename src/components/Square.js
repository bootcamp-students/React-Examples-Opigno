function Square(props) {
    // looking at the entire props object
    console.log(props)


    // render method
    return (
        <li>
            {props.colorName}
        </li>
    )
}

export default Square;