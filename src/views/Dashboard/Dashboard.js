import React from "react";
import { Row, Col } from 'antd';
import NoData from "../../components/noData/NoData";
import "../../css-loader/Dashboard.css"
function Dashboard() {
    return (
        <section className='Dashboard'>
            <header className="Dashboard-header">
                <div className="header-info">
                    <div className='portrait'><img src='https://s1.ax1x.com/2020/04/28/J5hUaT.jpg' alt='/'></img></div>
                    <div className='welcome'>
                        <p>早安，曲丽丽，祝你开心每一天！</p>
                        <p>北京电力交易中心</p>
                    </div>
                </div>
                <div className="time">
                    <div className='time-text'>
                        <p>今天是2020年 </p>
                        <p>1月07日</p>
                    </div>
                    <div className='time-icon'>一</div>
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
                                        <span className='Col-lis-num'>1</span>
                                    </div>
                                </li>
                                <li className='Col-lis Col-lis-bordr'>
                                    <div>
                                        <span className='num-title'>我的意向</span>
                                        <span className='Col-lis-num'>1</span>
                                    </div>
                                </li>
                                <li className='Col-lis'>
                                    <div>
                                        <span className='num-title'>收藏意向</span>
                                        <span className='Col-lis-num'>1</span>
                                    </div></li>
                            </ul>
                            <div className='Col-title'>
                                <span>洽谈中电量 <b className='big'>2000MWh</b></span>
                                <span>已达成意向电量<b className='big' style={{ color: '#61D6C9' }}>2000MWh</b> </span>
                            </div>
                            <div className='ols'>
                                <div style={{ background: '#61B4D6' }}>
                                    <p className='olc-title'>待确认/洽谈中</p>
                                    <p className='olc-subTitle'>
                                        <span>3</span>
                                        <i style={{ margin: '5px 0' }}>/</i> 5
                                    </p>
                                </div>
                                <div style={{ background: '#61D6C9' }}>
                                    <p className='olc-title'>变更申请/已达成</p>
                                    <p className='olc-subTitle'>
                                        <span>3</span>
                                        <i style={{ margin: '5px 0' }}>/</i> 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8} >
                    <div className="Col-right">
                        <NoData />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Dashboard;