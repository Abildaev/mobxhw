import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

export const MainMenu = () => {
  return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="/"><h1>Книга контактов</h1></Navbar.Brand>
              <Nav className="me-auto">
                  <NavLink to="/groups" className="me-4">Группы</NavLink>
                  <NavLink to="/favorit">Избранное</NavLink>
              </Nav>
          </Container>
      </Navbar>
  );
}
