import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CodeEditorContainer from "./containers/CodeEditorContainer/CodeEditorContainer";
import LoginUserContainer from "./containers/LoginUserContainer/LoginUserContainer";
import RegisterUserContainer from "./containers/RegisterUserContainer/RegisterUserContainer";
import { store } from "./state";

const App: React.FC = () => {
  const components = (
    <Router>
      <Header />
      <div className="container-fluid">
        <Route path="/editor" component={CodeEditorContainer} exact />
        <Route path="/login" component={LoginUserContainer} exact />
        <Route path="/" component={LoginUserContainer} exact />
        <Route path="/register" component={RegisterUserContainer} exact />
      </div>
    </Router>
  );
  return <Provider store={store}>{components}</Provider>;
};

export default App;
