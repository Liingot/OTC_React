import Dashboard from "../views/Dashboard/Dashboard" //首页
import Task from "../views/Task/Task"; //任务管理' 
import TaskDKH from "../views/TaskDKH/Index"; //任务管理' 
import Business from "../views/Business/Business"  //商机管理
import BusinessDKH from "../views/BusinessDKH/BusinessDKH"  //商机管理
import Negotiation from "../views/Negotiation/Negotiation"; //双边洽谈
import Intention from "../views/Intention/Intention"; //意向管理

import Demo from "../views/Demo";
/**
 * role == [1,2]：大客户和发电企业公用菜单
 * role == [1] ： 发电企业菜单
 * role == [2] ： 大客户菜单
 */
const routerList = [
    { title: '交易台', component: Dashboard, path: "/Dashboard", role: [1, 2], hidden: false, activeMenu: "/Dashboard" },
    { title: "任务管理", component: Task, path: "/Task", role: [1], hidden: false, activeMenu: "/Task" },
    { title: "任务管理", component: TaskDKH, path: "/TaskDKH", role: [2], hidden: false, activeMenu: "/TaskDKH" },
    { title: "商机管理", component: Business, path: "/Business", role: [1], hidden: false, activeMenu: "/Business" },
    { title: "商机管理", component: BusinessDKH, path: "/BusinessDKH", role: [2], hidden: false, activeMenu: "/BusinessDKH" },
    { title: "双边洽谈", component: Negotiation, path: "/Negotiation", role: [1, 2], hidden: false, activeMenu: "/Negotiation" },
    { title: "意向管理", component: Intention, path: "/Intention", role: [1, 2], hidden: false, activeMenu: "/Intention" },

    
    { title: "BusinessDemo", component: Demo, path: "/demo", role: [1, 2], hidden: true, activeMenu: "/BusinessDKH" },
]
/**
 * 
 * trck == true为发电企业角色  trck == false为大客户 
 */
let trck = null;  //后期介入redux的时候，从redux中拿当前用于角色
let data = [];
let userInfo = localStorage.getItem('userInfo');
let companyType = userInfo ? JSON.parse(userInfo).companyType : '';
if (companyType === '1') {  //发电企业
    trck = true;
}
else if (companyType === '2') {  //售电公司
    trck = false;
} else {  //大客户
    trck = false;
}

if (trck)
    data = routerList.filter(item => {
        return item.role.includes(1) === true;
    })
else data = routerList.filter(item => {
    return item.role.includes(2) === true;
})


export default data;