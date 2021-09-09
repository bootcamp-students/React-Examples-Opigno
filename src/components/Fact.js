function Fact(props) {
    return (
        <li>
            {props.catFactObj.fact}
            <button
                type="button"
                class="btn btn-warning"
                onClick={() => props.updateFact(props.catFactObj.id)}
            >
                update
                </button>
        </li >
    )
}

export default Fact;