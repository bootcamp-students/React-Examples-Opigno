// split into two individual parts
function PTagGenerator(item, index) {
    return <p key={index}>{item}</p>
}
export function PTagMapper(arr) {
    return arr.map(PTagGenerator)
}

// one function
export function tableRowMapper(data, minMaxArr) {
    return data
        .filter(item => item.payload.description && item.payload.description.length > 0 && item)
        .slice(...minMaxArr)
        .map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.payload.description}</td>
                    <td>{item.actor.login}</td>
                </tr>
            )
        })
}