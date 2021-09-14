import { Card, Button } from 'react-bootstrap'

// split into two individual parts
function PTagGenerator(item, index) {
  return <p key={index}>{item}</p>
}
export function PTagMapper(arr) {
  return arr.map(PTagGenerator)
}

// one function
export function tableRowMapper(TData, minMaxArr) {
  console.log(TData)
  return TData
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

export const cardMapper = (cardData) => {
  console.log(cardData)
  return !!cardData && cardData.map((item, index) => <Card key={index} className="m-2">
    <Card.Header as="h5">Post {item.id}</Card.Header>
    <Card.Body>
      <Card.Title>UserID {item.userId}'s Post</Card.Title>
      <Card.Text>
        {item.title}
      </Card.Text>
      <Button variant="primary">Add Friend</Button>
    </Card.Body>
  </Card>
  )
}