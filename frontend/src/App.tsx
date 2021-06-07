import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CodeEditorContainer from "./containers/CodeEditorContainer/CodeEditorContainer";
import LoginUserContainer from "./containers/LoginUserContainer/LoginUserContainer";
import { store } from "./state";

function App() {
  const components = (
    <Router>
      <Header />
      <div className="container-fluid">
        <Route path="/" component={CodeEditorContainer} exact />
        <Route path="/login" component={LoginUserContainer} exact />
      </div>
    </Router>
  );
  return <Provider store={store}>{components}</Provider>;
}

export default App;
