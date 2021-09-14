import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/form" className="nav-link" activeClassName="active">Form</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
