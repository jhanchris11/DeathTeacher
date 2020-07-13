import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import { DownOutlined, BellOutlined, LogoutOutlined, SettingOutlined ,ProfileOutlined} from '@ant-design/icons'

const MenuUser = (
    <Menu>
        <Menu.Item icon={<ProfileOutlined />}>
            <Link to='/profile'>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Perfil
            </a>
            </Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
            <Link to='/settings'>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Settings
            </a>
            </Link>
        </Menu.Item>
        <Menu.Item icon={<LogoutOutlined />}>
            <Link to='/'>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/" >
                    Logout
            </a>
            </Link>
        </Menu.Item>
    </Menu>
)

const HeadMenu = () => {
    return (
        <Menu mode='horizontal'>
            <Menu.Item key="1" className='menu-item-icon'>
                <Badge count={99}>
                    <BellOutlined />
                </Badge>
            </Menu.Item>
            <Menu.Item key="2">
                <Dropdown overlay={MenuUser} trigger={['click']} >
                    <div>
                        <Avatar size={32} src="https://via.placeholder.com/32x32" className="mr-2" />
                        <span>Chris</span>
                        <DownOutlined className="ml-1" />
                    </div>
                </Dropdown>
            </Menu.Item>
        </Menu>
    )
}

export default HeadMenu
