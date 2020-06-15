import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import routerList from "../../../router/RouterMap" //路由表
import Header from "../Header/Header"; //头部

function Content() {
    return (
        <div className="sidebar-right">
            <Header />
            <section className='main'>
                <Switch>
                    <Redirect exact from="/" to="/Dashboard" />
                    {
                        routerList.map((item, index) => {
                            return (<Route path={item.path} key={index}
                                component={item.component}></Route>)
                        })
                    }
                </Switch>
            </section>
        </div>
    )
}

export default Content;