import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/home" className="navbar-brand" >Awesome Inc</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/form" className="nav-link" activeClassName="active">Form</NavLink>
                        <NavLink to="/data" className="nav-link" activeClassName="active">Data</NavLink>
                        <NavLink to="/axios" className="nav-link" activeClassName="active">Axios</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
