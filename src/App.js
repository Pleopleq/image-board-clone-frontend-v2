import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Feed from "./components/Feed";
import Register from "./components/Register";
import Login from "./components/Login"

const App = () => {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Feed}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
