import { Container } from "react-bootstrap/";
import "./App.css";
import MyEditor from "./components/Editor/MyEditor";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={MyEditor} exact />
      </Container>
    </Router>
  );
}

export default App;
