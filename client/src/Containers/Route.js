import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Team } from "./Team";
import { Home2 } from "./Home/Home2";


export const Routes = (props) => {
    return (
        <div className="app-main">
             <Router>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/team">
                    <Team />
                </Route>

                <Route path="/">
                    <Home2/>
                </Route>
            </Switch>
        </Router>
 
        </div>
      
    )
}