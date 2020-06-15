import React from "react";
import Sider from "./Sider/Sider"; //菜单栏
import Content from "./Content/Content"; //内容

function Index() {
    return (
        <div>
            <section className="sidebar">
                <Sider />
                <Content />
            </section>
        </div>)

}
export default Index