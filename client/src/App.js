import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import UserCrafts from "./components/UserCrafts";
import SingleUser from "./components/SingleUser";
import "./App.css";


class App extends Component {
    render() {
        return (
            <Router>
              <div>
              <NavBar/>
              <Switch>
                <div className="App">
                  <Route exact path="/api/users" component={UserList}/>
                  <Route exact path="/api/users/:user_id/crafts" component={UserCrafts}/>
                  <Route exact path="/api/users/:user_id" component={SingleUser}/>
                </div>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;