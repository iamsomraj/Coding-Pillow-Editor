import { Container } from "react-bootstrap/";
import CodeEditorContainer from "./containers/CodeEditorContainer/CodeEditorContainer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state";

function App() {
  const components = (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={CodeEditorContainer} exact />
      </Container>
    </Router>
  );
  return <Provider store={store}>{components}</Provider>;
}

export default App;
