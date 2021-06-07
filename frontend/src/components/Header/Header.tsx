import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: React.FC = () => {
  const { logout } = useActions();
  const { data: userInfo } = useTypedSelector((state) => state.loginUser);
  const logoutHandler = () => {
    logout();
  };
  let loggedIn = (
    <>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
    </>
  );

  if (userInfo) {
    loggedIn = (
      <>
        <NavDropdown title={userInfo["name"]} id="username">
          {/* <LinkContainer to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer> */}
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
        <LinkContainer to="/editor">
          <Nav.Link>Editor</Nav.Link>
        </LinkContainer>
      </>
    );
  }
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" collapseOnSelect>
      <LinkContainer to="/login">
        <Navbar.Brand>Coding Pillow Editor</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">{loggedIn}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
