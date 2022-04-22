import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import WalletConnectButton from "./WalletConnectButton";

const LinkStyle = { textDecoration: "none", color: "white" };

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Dec-Fund</Navbar.Brand>

        <Nav>
          <Nav.Link>
            <Link to="/" style={LinkStyle}>
              Home{" "}
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/create-fund-raiser" style={LinkStyle}>
              Raise-Funds{" "}
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/fund-projects" style={LinkStyle}>
              Fund-projects{" "}
            </Link>
          </Nav.Link>

          <WalletConnectButton />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
