import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
    RobotOutlined,
    QuestionCircleOutlined,
    ProfileOutlined,
} from '@ant-design/icons'


const Aside = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { Sider } = Layout
    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
            <div className='logo' />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" >

                <Menu.Item key="1" icon={<RobotOutlined />} >
                    <Link to='/' >Bot</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<QuestionCircleOutlined />} >
                    <Link to='/questions'>Preguntas</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ProfileOutlined />}>
                    <Link to='/profile'>Perfil</Link>
                </Menu.Item>
                {/* <Menu.Item key="3" icon={<FileProtectOutlined />}>
                    <Link to='/setting'>Setting</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ImportOutlined />}>
                    <Link to='/report'>Reporte</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ImportOutlined />} >
                    <Link to='/main'>Logout</Link>
                </Menu.Item> */}
            </Menu>
        </Sider>
    )
}


export default Aside
