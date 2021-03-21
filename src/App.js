import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route
            path="/"
            exact
            render={(
              props // props are history, location, match
            ) => <Home title="Stefano" {...props} />} // in this way you can pass your own props along with the router ones
          />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reservation" exact component={Reservations} />
          <Route path="/details/:stefano" component={DishDetails} />
        </Router>
      </>
    );
  }
}

export default App;
