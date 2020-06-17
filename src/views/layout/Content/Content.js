import React from "react"
import { Route, Switch, Redirect, useHistory } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group";

import routerList from "../../../router/RouterMap" //路由表
import Header from "../Header/Header"; //头部

function Content() {
    let history = useHistory().location;

    return (
        <div className="sidebar-right">
            <Header />
            <section className='main'>
                <TransitionGroup>
                    <CSSTransition
                        key={history.pathname}
                        timeout={1000}
                        classNames="fade"
                        exit={false}
                    >
                        <Switch>
                            <Redirect exact from="/" to="/Dashboard" />
                            {
                                routerList.map((item, index) => {
                                    return (
                                        <Route path={item.path} key={index}
                                            component={item.component}></Route>
                                    )
                                })
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </section>
        </div>
    )
}

export default Content;