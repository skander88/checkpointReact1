import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <header>
      <div id="root">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Lions Team</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>welcome to the Lions Team</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://img.freepik.com/vecteurs-premium/logo-tete-lion_60438-41.jpg?w=740"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="lion"
                src="https://img.freepik.com/vecteurs-premium/logo-tete-lion_60438-41.jpg?w=740"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Navigation;
