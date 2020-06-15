import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Select, Button, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { areaQueryByPage, login, getUsetInfo } from "../../api/login";
import "../../css-loader/login.css"
const { Option } = Select;
function Login() {
    let history = useHistory(); //获取router对象
    const [list, setList] = useState([]);
    const [params, setParams] = useState({ loginName: "", netProvinceId: "", certificate: "" });
    useEffect(() => {
        init();
    }, [])
    return (<div className='login'>
        <section className="login-content">
            <h3 className='login-title'>双边交易企业空间</h3>
            <div className='login-form'>
                <Input size="large" placeholder="请输入账号" prefix={<UserOutlined />} value={params.loginName} onChange={userNameHanlde} className='login-input' />
                <Input.Password size="large" placeholder="请输入密码" prefix={<UnlockOutlined />} value={params.certificate} onChange={certificateHanlde} style={{ margin: '30px 0' }} />
                <Select style={{ width: '100%' }} placeholder='请选择网省' size="large" onChange={handleChange}>
                    {
                        list.map(item => {
                            return (<Option value={item.id} key={item.id}>{item.name}</Option>)
                        })
                    }
                </Select>
                <p style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Button size="large" type="primary" style={{ width: '100%' }} onClick={submit}>登录</Button>
                </p>
            </div>
        </section>
    </div>)
    function rect() {
        history.push('/Dashboard');
    }
    function handleChange(value) {
        let { loginName, certificate } = params;
        setParams({ netProvinceId: value, loginName, certificate })
    }
    function submit() {
        let { loginName, netProvinceId, certificate } = params;
        if (!loginName) {
            message.warning('请输入账号');
            return;
        }
        if (!certificate) {
            message.warning('请输入密码');
            return;
        }
        if (!netProvinceId) {
            message.warning('请选择网省');
            return;
        }
        login(params).then(res => {
            if (res.data.code === 0) {
                localStorage.setItem('token', res.data.data);
                getUsetInfo().then(res => {
                    if (res.data.code === 0) {
                        localStorage.setItem('userInfo', JSON.stringify(res.data.data));
                        rect();
                    }
                })
            }
        })
    }
    function userNameHanlde(event) {
        let { certificate, netProvinceId } = params;
        let value = event.target.value;
        setParams({ loginName: value, netProvinceId, certificate })
    }
    function certificateHanlde(event) {
        let { loginName, netProvinceId } = params;
        let value = event.target.value;
        setParams({ loginName: loginName, netProvinceId, certificate: value })
    }
    function init() {  //获取网省列表
        areaQueryByPage({ pageNumber: 1, pageSize: 50 }).then(res => {
            if (res.data.code === 0) setList(res.data.data.result);
        })
    }
}

export default Login;