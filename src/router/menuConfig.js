// 配置面包屑渲染数据

/**
 * 
 * role == [1,2]：大客户和发电企业公用菜单
 * role == [1] ： 发电企业菜单
 * role == [2] ： 大客户菜单
 */
const menuList = [
  {
    title: "首页",
    path: "/Dashboard",
    role: [1, 2],
  },
  {
    title: "任务管理",
    path: "/Task",
    role: [1]
  },
  {
    title: "任务管理",
    path: "/TaskDKH",
    role: [2]
  },
  {
    title: "商机管理",
    path: "/Business",
    role: [1]
  },
  {
    title: "商机管理",
    path: "/BusinessDKH",
    role: [2]
  },
  {
    title: "双边洽谈",
    path: "/Negotiation",
    role: [1, 2]

  },
  {
    title: "意向管理",
    path: "/Intention",
    role: [1, 2]
  }
];

/**
 * 
 * trck == true为发电企业角色  trck == false为大客户
 */
let trck = false; let data = [];
if (trck) data = menuList.filter(item => {
  return item.role.includes(1) === true;
})
else data = menuList.filter(item => {
  return item.role.includes(2) === true;
})
export default data;
