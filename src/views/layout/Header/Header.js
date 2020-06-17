import React from "react";
import { useHistory } from "react-router-dom"
import { Menu, Dropdown, Breadcrumb } from 'antd';
import menuList from "../../../router/menuConfig";
const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="signOut">
            退出
        </Menu.Item>
    </Menu>
);
let userInfo = localStorage.getItem('userInfo');
let companyName = '';
if (userInfo) companyName = JSON.parse(userInfo).companyName;
function onClick(value) {
    let { key } = value;
    switch (key) {
        case 'signOut':
            localStorage.clear();
            break;

        default:
            break;
    }
}
function getPath(menuList, pathname) {
    let temppath = [];
    try {
        function getNodePath(node) {
            temppath.push(node);
            //找到符合条件的节点，通过throw终止掉递归
            if (node.path === pathname) {
                throw new Error("GOT IT!");
            }
            if (node.children && node.children.length > 0) {
                for (var i = 0; i < node.children.length; i++) {
                    getNodePath(node.children[i]);
                }
                //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
                temppath.pop();
            } else {
                //找到叶子节点时，删除路径当中的该叶子节点
                temppath.pop();
            }
        }
        for (let i = 0; i < menuList.length; i++) {
            getNodePath(menuList[i]);
        }
    } catch (e) {
        return temppath;
    }
};
function Header() {
    // 拿到面包屑渲染的数组
    let history = useHistory();
    const pathname = history.location.pathname;
    let path = getPath(menuList, pathname);
    const first = path && path[0];
    if (first && first.title.trim() !== "首页") {
        path = [{ title: "首页", path: "/Dashboard" }].concat(path);
    }
    return (<div>
        <header className='layout-header'>
            <Breadcrumb>
                {path &&
                    path.map((item) =>
                        <Breadcrumb.Item key={item.path} onClick={() => { history.push(item.path) }}>{item.title}</Breadcrumb.Item>
                    )}
            </Breadcrumb>
            <div className='right-menu'>
                <span>{companyName}
                </span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <div className='user-logo' >
                        <img src="https://s1.ax1x.com/2020/04/28/J5hUaT.jpg" alt="" />
                    </div>
                </Dropdown>
            </div>
        </header>
    </div>)

}

export default Header