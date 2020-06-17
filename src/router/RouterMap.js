import Dashboard from "../views/Dashboard/Dashboard" //首页
import Task from "../views/Task/Task"; //任务管理' 
import TaskDKH from "../views/TaskDKH/Index"; //任务管理' 
import Business from "../views/Business/Business"  //商机管理
import BusinessDKH from "../views/BusinessDKH/BusinessDKH"  //商机管理
import Negotiation from "../views/Negotiation/Negotiation"; //双边洽谈
import Intention from "../views/Intention/Intention"; //意向管理
/**
 * role == [1,2]：大客户和发电企业公用菜单
 * role == [1] ： 发电企业菜单
 * role == [2] ： 大客户菜单
 */
const routerList = [
    { title: '首页', component: Dashboard, path: "/Dashboard", role: [1, 2] },
    { title: "任务管理", component: Task, path: "/Task", role: [1] },
    { title: "任务管理", component: TaskDKH, path: "/TaskDKH", role: [2] },
    { title: "商机管理", component: Business, path: "/Business", role: [1] },
    { title: "商机管理", component: BusinessDKH, path: "/BusinessDKH", role: [2] },
    { title: "双边洽谈", component: Negotiation, path: "/Negotiation", role: [1, 2] },
    { title: "意向管理", component: Intention, path: "/Intention", role: [1, 2] }
]
/**
 * 
 * trck == true为发电企业角色  trck == false为大客户 
 */
let trck = false;  //后期介入redux的时候，从redux中拿当前用于角色
let data = [];
if (trck) data = routerList.filter(item => {
    return item.role.includes(1) === true;
})
else data = routerList.filter(item => {
    return item.role.includes(2) === true;
})


export default data;