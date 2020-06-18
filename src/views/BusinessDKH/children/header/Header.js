import React, { useState, useEffect } from "react";
import { useHeader } from "../../../../useContent/Use.js";
import Progress from "../../../../components/progress/Progress";
import { getInit } from "../../../../api/BusinessDKH/header";
import "./index.css";
function Header() {
    const [intentionData, setInfo] = useState({
        companyNo: null,
        intenCount: 0,
        orderCount: 0,
        peerAverageCount: 9231.76,
        peerHighest: 6,
        peerIntenCount: 3,
        peerMinimum: 2,
        purchaseAverageCount: 20000,
        purchaseCount: 1,
        purchaseHighest: 6,
        purchaseMinimum: 6,
    });
    useEffect(() => {
        init();
    }, []);
    function init() {
        getInit({}).then(res => {
            if (res.data.code === 0) setInfo(res.data.data);
        })
    }
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
                        <span className="text-content">{intentionData.intenCount}个</span>
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
                        <span className="text-content">{intentionData.orderCount}个</span>
                    </p>
                </li>
                <li className="manage-lis">
                    <p>
                        <span className="text">意向数量</span>
                        <span className="text-content">{intentionData.peerIntenCount || 0}个</span>
                    </p>
                    <p>
                        <span className="text">均价</span>
                        <span
                            className="text-content">{intentionData.peerAverageCount ? Number(intentionData.peerAverageCount.toFixed(2)) : 0}元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最高价</span>
                        <span className="text-content red-color"
                        >{intentionData.peerHighest ? Number(intentionData.peerHighest.toFixed(2)) : 0}元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最低价</span>
                        <span className="text-content green-color"
                        >{intentionData.peerMinimum ? Number(intentionData.peerMinimum.toFixed(2)) : 0}元/MWh</span>
                    </p>
                </li>
                <li className="manage-lis">
                    <p>
                        <span className="text">意向数量</span>
                        <span className="text-content">{intentionData.purchaseCount || 0}个</span>
                    </p>
                    <p>
                        <span className="text">均价</span>
                        <span
                            className="text-content">{intentionData.purchaseAverageCount ? Number(intentionData.purchaseAverageCount.toFixed(2)) : 0}元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最高价</span>
                        <span className="text-content red-color"
                        >{intentionData.purchaseHighest ? Number(intentionData.purchaseHighest.toFixed(2)) : 0}元/MWh</span>
                    </p>
                    <p>
                        <span className="text">最低价</span>
                        <span className="text-content green-color"
                        >{intentionData.purchaseMinimum ? Number(intentionData.purchaseMinimum.toFixed(2)) : 0}元/MWh</span>
                    </p>
                </li>
            </ul>
        </section>
    </div>)
}

export default Header