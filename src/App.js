import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/employee-kiosk/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
