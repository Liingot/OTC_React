import React from "react";
import { Row, Col } from 'antd';
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
                    <div className='Col'>
                        <div className='Col-content'>
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
                        </div>
                    </div>
                </Col>
                <Col span={8} >
                    <div className="Col-right"></div>
                </Col>
            </Row>
        </section>
    )
}

export default Dashboard;