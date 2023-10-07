
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(){
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img src="https://www.freetogame.com/assets/images/freetogame-logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Главная</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default Header