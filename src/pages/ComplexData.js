import React from 'react'
import { data } from '../data/large-file'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { PTagMapper, tableRowMapper } from '../utilities/mapHelper'

export default function ComplexData() {
  let arr1 = [
    "Ex quam aliquam et.",
    "Animi voluptatem ut aliquid magnam quia nisi qui.",
    "Adipisci porro iure corporis quod dolores.",
    "Rerum sunt adipisci non inventore nulla dignissimos neque.",
    "Omnis dolores numquam autem dolorum non et incidunt sit cum.",
    "Iure ut consequatur.",
    "Est ea nemo esse pariatur."
  ]
  let arr2 = [
    "Facere id quasi voluptas pariatur sed cupiditate id ratione eaque.",
    "Et eum architecto nihil sed.",
    "Dolore dolorem omnis cupiditate.",
    "Aperiam corporis beatae.",
    "Nam vel et illum nihil occaecati officia.",
    "Aut numquam qui facere."
  ]
  let arr3 = [
    "Quas libero aut sapiente pariatur minus facilis nulla eum quo.",
    "Quaerat amet labore dolore.",
    "Veritatis est consequatur aut amet ullam.",
    "Vel placeat qui et dolores quia repellat placeat nobis earum.",
    "Nihil veritatis dolorem et adipisci iste magnam veritatis enim."
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h1>Here are a few different mappings of cool GitHub data</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h2>first chunk of data</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {tableRowMapper(data, [0, 10])}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>second chunk of data</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {tableRowMapper(data, [10, 20])}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <h3>data blurb 1</h3>
          <div className="border border-primary p-2">
            {PTagMapper(arr1)}
          </div>
        </Col>
        <Col xs={4} border>
          <h3>data blurb 2</h3>
          <div className="border border-secondary p-2">
            {PTagMapper(arr2)}
          </div>
        </Col>
        <Col xs={4} border>
          <h3>data blurb 3</h3>
          <div className="border border-success p-2">
            {PTagMapper(arr3)}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
