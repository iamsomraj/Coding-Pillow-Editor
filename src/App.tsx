import { Container } from "react-bootstrap/";
import "./App.css";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={CodeEditor} exact />
      </Container>
    </Router>
  );
}

export default App;
