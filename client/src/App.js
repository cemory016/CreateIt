import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllUserList from "./components/AllUserList";
import UserSingleCraftAndAllComments from "./components/UserSingleCraftAndAllComments";
import UserProfile from "./components/UserProfile";
import SignUp from './components/SignUp';
import AllCraftComments from "./components/AllCraftComments";
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
                  <Route exact path="/signup" component={SignUp}/>
                  <Route exact path="/users" component={AllUserList}/>
                  <Route exact path="/users/:id" component={UserProfile}/>
                  <Route exact path="/users/:user_id/crafts/:id" component={UserSingleCraftAndAllComments}/>
                </div>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;