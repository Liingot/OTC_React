// 推荐的意向
import React from "react";
import { useHistory } from "react-router-dom";
// import power1 from "../../assets/images/power1.png";
// import power2 from "../../assets/images/power2.png";
// import power3 from "../../assets/images/power3.png";
// import power4 from "../../assets/images/power4.png";
// import power5 from "../../assets/images/power5.png";
// import power6 from "../../assets/images/power6.png";
import "./intention.css";

function Intention() {
    let history = useHistory();
    function handle() {
        history.push('/demo');
    }
    return (<div>
        <div className="intention">
            <header className="intent-header">
                <h3 className="intent-h3">
                    推荐的意向
            </h3>
            </header>
            <section className="inten-content">
                <ul className="inten-uls">
                    <li className="inten-lis" onClick={handle}>
                        <p>
                            <span className="text">购电量范围（MWh）</span>
                            <span className="text-content">10MWh - 100MWh</span>
                        </p>
                        <p>
                            <span className="text">指导价格（元/MWh）</span>
                            <span className="text-content">9元/MWh</span>
                        </p>
                        <p>
                            <span className="text">发电类型</span>
                            <span className="text-content type">
                                {/* <span className="type-img">
                                <img :src="power1" alt="" v-show="item.powerType == 1">
                                <img :src="power2" alt="" v-show="item.powerType == 2">
                                <img :src="power3" alt="" v-show="item.powerType == 3" style="width: 16px;">
                                <img :src="power4" alt="" v-show="item.powerType == 4" style="width: 16px;">
                                <img :src="power5" alt="" v-show="item.powerType == 5" style="width: 16px;">
                                <img :src="power6" alt="" v-show="!item.powerType || item.powerType == 6"
                                    style="width: 16px;">
                            </span> */}
                                {/* {{item.powerType | power}} */}
                            火电
                        </span>
                        </p>
                        <p>
                            {/* :className="changeLevelColor(item.creditLevel)" */}
                            <span className="text" >1</span>
                            <span className="text" >2</span>
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </div>)
}

export default Intention;