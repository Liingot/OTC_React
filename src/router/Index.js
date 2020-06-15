import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "../css-loader/router.css"
import Layout from "../views/layout/Index";
import Login from "../views/Login/Login"; //登录

function Index() {
    return (
        <Router>
            <Switch>
                <Route component={Login}  path="/login"></Route>
                <Layout />
            </Switch>
        </Router>
    )
}
export default Index;