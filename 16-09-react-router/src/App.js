import Navigation from "./components/navigation/Navigation"

import {Switch, Route} from "react-router-dom"

import MealsNav from "./components/meals/MealsNav"

import "./App.scss"


function App() {

    return (
        <div className="app">
            <Navigation/>
            <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route path="/meals" component={MealsNav}/>
                <Route path="/posts" render={() => <h1>Home</h1>}/>
            </Switch>
        </div>
    );
}

export default App;
