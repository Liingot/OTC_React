import React, { useEffect, useState } from "react";
import { Row, Col } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import NoData from "../../components/noData/NoData";
import "../../css-loader/Dashboard.css"
import { getUserInfo } from "../../api/Dashboard.js";

const getTime = () => {
    let time = new Date().getHours();
    let text = '';
    if (time < 12) text = '早上好';
    else if (time > 12 && time < 19) text = '下午好';
    else text = '晚上好';
    return { time: text };
}
const getWeek = () => {
    let now = new Date().getDay();
    const weeks = ["七", "一", "二", "三", "四", "五", "六"];
    let week = weeks[now];
    return { week };
}
const getDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month <= 9 ? `0${month}` : month;
    let te = date.getDate();
    te = te <= 9 ? `0${te}` : te;
    return { year, month, te }
}

function Dashboard() {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        init();
    }, []);
    function init() {
        getUserInfo().then(res => {
            if (res.data.code === 0) {
                let userInfo = localStorage.getItem('userInfo');
                let info = {};
                if (userInfo) {
                    userInfo = JSON.parse(userInfo);
                    let { userName, netProvince } = userInfo;
                    info.userName = userName;
                    info.netProvince = netProvince;
                }
                setUserInfo({ ...res.data.data, ...getWeek(), ...getDate(), ...getTime(), ...info });
            }
        })
    }
    const { recommendGoodsCount, myGoodsCount, operationGoodsCount,
        talkPowerTotal, reachPowerTotal, noConfirmOrderCount, talkOrderCount,
        applyOrderCount, reachOrderCount, userName, time, year, month, te, week, netProvince } = userInfo;
    return (
        <section className='Dashboard'>
            <header className="Dashboard-header">
                <div className="header-info">
                    <div className='portrait'><img src='https://s1.ax1x.com/2020/04/28/J5hUaT.jpg' alt='/'></img></div>
                    <div className='welcome'>
                        <p>{time}，{userName}，祝你开心每一天！</p>
                        <p>{netProvince}电力交易中心</p>
                    </div>
                </div>
                <div className="time">
                    <div className='time-text'>
                        <p>今天是{year}年 </p>
                        <p>{month}月{te}日</p>
                    </div>
                    <div className='time-icon'>{week}</div>
                </div>
            </header>
            <Row>
                <Col span={16}>
                    <div className='Col' >
                        <div className='Col-content' style={{ position: 'relative' }}>
                            <p className='Col-content-text'>
                                <span>OTC双边交易</span>
                                <span>发布意向</span>
                            </p>
                            <ul className='Col-uls'>
                                <li className='Col-lis'>
                                    <div>
                                        <span className='num-title'>推荐意向</span>
                                        <span className='Col-lis-num'>{recommendGoodsCount}</span>
                                    </div>
                                </li>
                                <li className='Col-lis Col-lis-bordr'>
                                    <div>
                                        <span className='num-title'>我的意向</span>
                                        <span className='Col-lis-num'>{myGoodsCount}</span>
                                    </div>
                                </li>
                                <li className='Col-lis'>
                                    <div>
                                        <span className='num-title'>收藏意向</span>
                                        <span className='Col-lis-num'>{operationGoodsCount}</span>
                                    </div></li>
                            </ul>
                            <div className='Col-title'>
                                <span>洽谈中电量 <b className='big'>{talkPowerTotal}MWh</b></span>
                                <span>已达成意向电量<b className='big' style={{ color: '#61D6C9' }}>{reachPowerTotal}MWh</b> </span>
                            </div>
                            <div className='ols'>
                                <div style={{ background: '#61B4D6' }}>
                                    <p className='olc-title'>待确认/洽谈中</p>
                                    <p className='olc-subTitle'>
                                        <span>{noConfirmOrderCount}</span>
                                        <i style={{ margin: '5px 0' }}>/</i> {talkOrderCount}
                                    </p>
                                </div>
                                <div style={{ background: '#61D6C9' }}>
                                    <p className='olc-title'>变更申请/已达成</p>
                                    <p className='olc-subTitle'>
                                        <span>{applyOrderCount}</span>
                                        <i style={{ margin: '5px 0' }}>/</i> {reachOrderCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8} >
                    <div className="Col-right">
                        <h3 className="Col-right-h3">
                            <span>年度目标</span>

                            <FormOutlined />
                        </h3>
                        <div className="col-right-echarts">
                            <NoData />
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Dashboard;