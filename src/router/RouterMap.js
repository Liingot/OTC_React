import Dashboard from "../views/Dashboard/Dashboard" //首页
import Task from "../views/Task/Task"; //任务管理'
import Business from "../views/Business/Business"  //商机管理
import Negotiation from "../views/Negotiation/Negotiation"; //双边洽谈
import Intention from "../views/Intention/Intention"; //意向管理

const routerList = [
    { title: '首页', component: Dashboard, path: "/Dashboard" },
    { title: "任务管理", component: Task, path: "/Task" },
    { title: "商机管理", component: Business, path: "/Business" },
    { title: "双边洽谈", component: Negotiation, path: "/Negotiation" },
    { title: "意向管理", component: Intention, path: "/Intention" }
]

export default routerList;