// 我发布的意向
import React from "react";
import addIcon from "../../assets/images/add.png";
import { Pagination } from 'antd';
// import power1 from "../../assets/images/power1.png";
// import power2 from "../../assets/images/power2.png";
// import power3 from "../../assets/images/power3.png";
// import power4 from "../../assets/images/power4.png";
// import power5 from "../../assets/images/power5.png";
// import power6 from "../../assets/images/power6.png";
import './myIntention.css';

function onChange(page, pageSize) {
    console.log(page, pageSize);
}
function onShowSizeChange(current, size) {
    console.log(size);
}
function myIntention() {
    return (<div>
        <div className="myintention">
            <header className="my-intent-header">
                <h3 className="intent-h3">
                    我发布的意向
            </h3>
                <div className="operation">
                    <img src={addIcon} alt='/'
                        style={{ width: 25, height: 25, marginLeft: 15 }}
                    />
                </div>
            </header>
            <section className="my-content">
                <ul className="my-uls">
                    <li className="my-lis">
                        <div className="my">
                            <p>
                                <span className="text">求购电量（MWh）</span>
                                <span className="text-content">1000MWh
                            </span>
                            </p>
                            <p>
                                <span className="text">意向价格（元/MWh）</span>
                                <span className="text-content">10</span>
                            </p>
                            <p>
                                <span className="text">意向电力类型</span>
                                <span className="text-content type">
                                    {/* <span className="type-img">
                                    <img :src="power1" alt="" v-show="item.powerType == 1">
                                    <img :src="power2" alt="" v-show="item.powerType == 2">
                                    <img :src="power3" alt="" v-show="item.powerType == 3">
                                    <img :src="power4" alt="" v-show="item.powerType == 4">
                                    <img :src="power5" alt="" v-show="item.powerType == 5">
                                    <img :src="power6" alt="" v-show="!item.powerType || item.powerType == 6">
                                </span> */}
                                    {/* {{item.powerType | power}} */}
                                火电
                            </span>
                            </p>
                            <div className="look">
                                <div style={{ textAlign: 'left' }}>
                                    {/* <i className="el-icon-view my-icon"></i> */}
                                被浏览
                                <span className="look-num">0</span>
                                </div>
                                <div>
                                    {/* <i className="el-icon-star-off
                                my-icon"></i> */}
                                被收藏
                                <span className="look-num">0</span>
                                </div>
                                <div>
                                    {/* <i className="el-icon-refresh
                                my-icon"></i> */}
                                转订单
                                <span className="look-num">0</span>
                                </div>
                            </div>

                        </div>
                        <div className="lis-footer">
                            <span>编辑</span>
                            {/* {{item.status == '1' ? '下架' : '上架'}} */}
                            <span
                            >上架</span>
                            <span>详情</span>
                        </div>
                    </li>
                </ul>
            </section>
            <Pagination style={{ textAlign: 'right' }} showQuickJumper defaultCurrent={1} pageSizeOptions={["6", "12", "18"]} total={500} onChange={onChange} onShowSizeChange={onShowSizeChange} />
        </div>
    </div>)
}

export default myIntention