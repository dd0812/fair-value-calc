/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

function Main() {
    return (
      <HashRouter>
        <div>
          <h1>Fair Value Calculator</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            {/* <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
          </ul>
          <div className="content">
            <Route>
                <Home />
            </Route>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
      </HashRouter>
    );
}
 
export default Main;