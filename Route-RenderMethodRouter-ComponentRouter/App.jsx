//C Drive Space problem / create project and npm react-router-dom
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Menue from "./Menue";

const App = () => {
  const Name = () => {
    return <h1>Hello i am a Name Page</h1>;
  };

  return (
    <>
      <Menue />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/Service"
          render={() => <Service name="Service" />}
        />
        <Route
          exact
          path="/Contact"
          component={() => <Contact name="Contact" />}
        />
        <Route exact path="/Contact/Name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
