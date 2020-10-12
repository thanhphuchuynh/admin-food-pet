import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AddProduct, Home, Introduction } from "../Pages";
import { getCookies } from "../contains";
import Login from "../Pages/Login";

const isAuth = ()=>(getCookies())?<Home />:<Login />

const RouteItem = ()=>{
    return <Switch>
                <Route path='/' exact component={Introduction} />
                <Route path='/home'  component={isAuth} />
                
                <Route path='/introduction' exact component={Introduction} />
            </Switch>
}

export const RouterHome = ()=>{
    return (
                <Switch>
                    <Route path='/home/addProduct' exact component={AddProduct} />
                    <Route path='/introduction' exact component={Introduction} />
                </Switch>)
           
}

const RouterNavigation = ()=>{
    return (
        <Router>
            <RouteItem />
        </Router>
    )
} 

export default RouterNavigation;