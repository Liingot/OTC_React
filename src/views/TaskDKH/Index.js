import React from "react";
import { Row, Col } from 'antd';
import { DownOutlined, FormOutlined } from '@ant-design/icons';
import NoData from "../../components/noData/NoData";
import "../../css-loader/taskDKH.css";

function Index() {
    return (
        <div>
            <header className='task-header'>
                <span className="el-dropdown-link">
                    2020采购计划
                    <DownOutlined style={{ marginLeft: 5 }} />
                </span>
            </header>
            <section className='grid'>
                <div className="grid-content">
                    <header className='grid-content-header'>
                        <span>OTC采购计划</span>
                        <FormOutlined className='task-icon' twoToneColor="#0083c3" />
                    </header>
                    <div className="grid-echarts-left">
                        <NoData />
                    </div>
                </div>
                <div className="grid-content">
                    <header className='grid-content-header'>
                        <span>可再生能源采购计划</span>
                        <FormOutlined className='task-icon' twoToneColor="#0083c3" />
                    </header>
                    <div className="grid-echarts-left">
                        <NoData />
                    </div>
                </div>
            </section>
            <Row>
                <Col span={24}>
                    <div className='monthly'>
                        <header className='grid-content-header' style={{ background: 'white' }}>
                            <span>历史用电趋势</span>
                            <span className='setMonthly'>设置月度计划</span>
                        </header>
                        <div className='monthly-content'>
                            <NoData />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Index;