import React from 'react'

import Navigation from "./components/navigation/Navigation"

import {Switch, Route} from "react-router-dom"

import MealsNav from "./components/meals/MealsNav"
import PostList from "./components/posts/PostList"

import "./App.scss"


function App() {

    return (
        <div className="app">
            <Navigation/>
            <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route path="/meals" component={MealsNav}/>
                <Route path="/posts" component={PostList}/>
            </Switch>
        </div>
    );
}

export default App;
