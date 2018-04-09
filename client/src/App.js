// App.js
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
              <div>
              <NavBar/>
              <Switch>
                <div className="App">

                    <div>
                        <h1>Craft It!</h1>
                        <div>
                            <div><Link to="/">Crafts</Link></div>
                        </div>
                    </div>

                    {/* <Route exact path="/" component={Craft}/>
                    <Route path="/artist/:id" component={User}/> */}

                </div>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;