function Square(props) {
    // looking at the entire props object
    console.log(props)

    var unreadMessages = []

    // render method
    return (
        <>
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>}
            </div>
        </>
    )
}

export default Square;