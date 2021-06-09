import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { render } from "../../TestUtil/TestUtil";
import Header from "../Header";

test("Brand name renders correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>,
    options
  );
  const brandEl = getByTestId("brand-name");
  expect(brandEl.textContent).toBe("Coding Pillow Editor");
});

test("Login link initially present in the header", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>,
    options
  );
  const loginLinkEl = getByTestId("login-link-container");
  expect(loginLinkEl.textContent).toBe("Login");
});

test("register link initially present in the header", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>,
    options
  );
  const registerLinkEl = getByTestId("register-link-container");
  expect(registerLinkEl.textContent).toBe("Register");
});

test("login link container correctly redirects to a login page", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>,
    options
  );
  const loginLinkContainerEl = getByTestId("login-link-container");
  expect(loginLinkContainerEl.getAttribute("href")).toBe("/login");
  expect(loginLinkContainerEl.getAttribute("data-rb-event-key")).toBe("/login");
});

test("register link container correctly redirects to a register page", () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  const registerLinkContainerEl = getByTestId("register-link-container");
  expect(registerLinkContainerEl.getAttribute("href")).toBe("/register");
  expect(registerLinkContainerEl.getAttribute("data-rb-event-key")).toBe(
    "/register"
  );
});
