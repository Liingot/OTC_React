import React from "react";
import { useHeader } from "../../../../useContent/Use.js";
import Progress from "../../../../components/progress/Progress";
import "./index.css";
function Header() {
    return (<div>
        <useHeader.Provider value={'商机管理'}>
            <Progress />
        </useHeader.Provider>
        <section className="manage-content">
            <div className="title">
                <span>我的报价情况</span>
                <span>同行意向报价情况</span>
                <span>卖家意向报价情况</span>
            </div>
            <ul className="manage-uls">
                <li className="manage-lis">
                    <p>
                        <span className="text">发布意向</span>
                        <span className="text-content">0个</span>
                    </p>
                    <p>
                        <span className="text">被预览</span>
                        <span className="text-content">0次</span>
                    </p>
                    <p>
                        <span className="text">被收藏</span>
                        <span className="text-content">0次</span>
                    </p>
                    <p>
                        <span className="text">转化订单</span>
                        <span className="text-content">0个</span>
                    </p>
                </li>
                <li className="manage-lis">
                    <p>
                        <span className="text">意向数量</span>
                        <span className="text-content">0个</span>
                    </p>
                    <p>
                        <span className="text">均价</span>
                        <span
                            className="text-content">0元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最高价</span>
                        <span className="text-content red-color"
                        >0元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最低价</span>
                        <span className="text-content green-color"
                        >0元/MWh</span>
                    </p>
                </li>
                <li className="manage-lis">
                    <p>
                        <span className="text">意向数量</span>
                        <span className="text-content">0个</span>
                    </p>
                    <p>
                        <span className="text">均价</span>
                        <span
                            className="text-content">0元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最高价</span>
                        <span className="text-content red-color"
                        >0元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最低价</span>
                        <span className="text-content green-color"
                        >0元/MWh</span>
                    </p>
                </li>
            </ul>
        </section>
    </div>)
}

export default Header