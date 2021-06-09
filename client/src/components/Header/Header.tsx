import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: React.FC = () => {
  const { logout } = useActions();
  const { data: userInfo } = useTypedSelector((state) => state.loginUser);
  const logoutHandler = () => {
    logout();
  };
  let links = (
    <>
      <LinkContainer data-testid="login-link-container" to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer data-testid="register-link-container" to="/register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
    </>
  );

  if (userInfo) {
    links = (
      <>
        <Navbar.Brand>{`Hello ${userInfo.name}!`}</Navbar.Brand>
        <LinkContainer to="/login">
          <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        </LinkContainer>
      </>
    );
  }
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" collapseOnSelect>
      <LinkContainer to="/login">
        <Navbar.Brand data-testid="brand-name">
          Coding Pillow Editor
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">{links}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
