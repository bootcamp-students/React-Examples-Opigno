function Square(props) {
    // looking at the entire props object
    console.log(props)

    // render method
    return (
        <>
            <h1>I am a square, and this is my size: {props.size}</h1>
            <div>this is a sibling to the h1</div>
        </>
    )
}

export default Square;