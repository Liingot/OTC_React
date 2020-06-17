// 我收藏的意向

import React from "react";
import { Pagination } from 'antd';
// import power1 from "../../assets/images/power1.png";
// import power2 from "../../assets/images/power2.png";
// import power3 from "../../assets/images/power3.png";
// import power4 from "../../assets/images/power4.png";
// import power5 from "../../assets/images/power5.png";
// import power6 from "../../assets/images/power6.png";
import "./collection.css";

function onChange(page, pageSize) {
    console.log(page, pageSize);
}
function onShowSizeChange(current, size) {
    console.log(size);
}
function Collection() {
    return (<div>
        <div className="myintention collection">
            <header className="intent-header">
                <h3 className="intent-h3">
                    我收藏的意向
            </h3>

            </header>
            <section className="my-content" >
                <ul className="my-uls">
                    <li className="my-lis" >
                        <div className="my">
                            <p>
                                <span className="text">购电范围（MWh）</span>
                                <span className="text-content">100 - 200</span>
                            </p>
                            <p>
                                <span className="text">指导价格（元/MWh）</span>
                                <span className="text-content">3</span>
                            </p>
                            <p>
                                <span className="text">发电类型</span>
                                <span className="text-content type">
                                    {/* <span className="type-img" v-if="!role">
                                    <img :src="power1" alt="" v-show="item.powerType == 1">
                                    <img :src="power2" alt="" v-show="item.powerType == 2">
                                    <img :src="power3" alt="" v-show="item.powerType == 3">
                                    <img :src="power4" alt="" v-show="item.powerType == 4">
                                    <img :src="power5" alt="" v-show="item.powerType == 5">
                                    <img :src="power6" alt="" v-show="!item.powerType || item.powerType == 6">
                                </span>
                                {{item.powerType | power}} */}
                                火电
                            </span>
                            </p>
                            <p>
                                {/* :className="changeLevelColor(item.creditLevel)" */}
                                <span className="text">1</span>
                                <span className="text" >2</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <Pagination style={{ textAlign: 'right' }} showQuickJumper defaultCurrent={1} pageSizeOptions={["6", "12", "18"]} total={500} onChange={onChange} onShowSizeChange={onShowSizeChange} />
        </div>
    </div>)
}

export default Collection;