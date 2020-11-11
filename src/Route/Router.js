import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddProduct, Home, Introduction, ManageOrder, ManageProduct, ManageUser } from '../Pages';
import { getCookies } from '../contains';
import Login from '../Pages/Login';

const isAuth = () => (getCookies() ? <Home /> : <Login />);

const RouteItem = () => {
  return (
    <Switch>
      <Route path="/home" component={isAuth} />
      <Route path="/" component={Introduction} />
      <Route path="/introduction" exact component={Introduction} />
    </Switch>
  );
};

export const RouterHome = () => {
  return (
    <Switch>
      <Route path="/home/addProduct" exact component={AddProduct} />
      <Route path="/introduction" exact component={Introduction} />
      <Route path="/home/ManageProduct" exact component={ManageProduct} />
      <Route path="/home/ManageUser" exact component={ManageUser} />
      <Route path="/home/ManageOrder" exact component={ManageOrder} />
    </Switch>
  );
};

const RouterNavigation = () => {
  return (
    <Router>
      <RouteItem />
    </Router>
  );
};

export default RouterNavigation;
