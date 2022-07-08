import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Employee Registration</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/employeeRegistration");
                }}
              >
                Registration
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
