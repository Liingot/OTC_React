import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import "../css-loader/router.css"
import Layout from "../views/layout/Index";
import Login from "../views/Login/Login"; //登录

let token = localStorage.getItem('token'); //后期改成redux获取
function Index() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login"></Route>
                {/* <Layout /> */}
                <Route
                    render={() => {
                        if (!token) {
                            return <Redirect to="/Login" />;
                        } else {
                            console.log('000');
                            return <Layout />;
                        }
                    }}
                />

            </Switch>
        </Router>
    )
}
export default Index;