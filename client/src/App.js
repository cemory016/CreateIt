import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllUserList from "./components/AllUserList";
import UserCrafts from "./components/UserCrafts";
import SingleUserView from "./components/SingleUserView";
import CraftComment from "./components/CraftComment";
import "./App.css";


class App extends Component {
    render() {
        return (
            <Router>
              <div>
              <NavBar/>
              <Switch>
                <div className="App">
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/users" component={AllUserList}/>
                  <Route exact path="/users/:id" component={SingleUserView}/>
                  <Route exact path="/users/:user_id/crafts" component={UserCrafts}/>
                  <Route exact path="/users/:user_id/crafts/:craft_id/comments" component={CraftComment}/>
                </div>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;