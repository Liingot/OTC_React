import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import routerList from "../../../router/RouterMap" //路由表

let list = [];
routerList.forEach(v => { list.push(v.path) });
function Sider() {
    let history = useHistory();
    const [activeIndex, setActive] = useState(0);
    useEffect(() => {
        let pathName = history.location.pathname; //获取当前路由信息
        pathName = routerList.find(item => { return item.path === pathName }).activeMenu;
        filter(pathName);
    });
    function filter(name) {  //解决刷新页面后菜单栏初始化的问题
        setActive(list.indexOf(name));
    }
    return (
        <div className="sidebar-left">
            <ul className="sidebar-ul">
                {
                    routerList.map((item, index) => {
                        if (!item.hidden) {
                            return (
                                // onClick={() => { setActive(index) }}
                                // sidebar-li是默认样式,sidebar-li-active是选中时候的样式
                                <li className={`sidebar-li ${index === activeIndex ? 'sidebar-li-active' : null}`} key={index}>
                                    <Link to={`${item.path}`}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}
export default Sider;