import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand>FIREBASE</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/basic">Clase 13</Nav.Link>
        <Nav.Link href="/advance">Clase 14</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
