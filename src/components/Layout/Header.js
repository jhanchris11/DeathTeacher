
import React from 'react'
import { Layout, Avatar, Typography } from 'antd'
import Search from './Search'
import HeadMenu from './HeadMenu'
const { Title } = Typography;
const { Header } = Layout

const HeaderSecundario = () => {

    return (
        <Header className='cl-header'>
            <HeadMenu />
        </Header>
    )
}

export default HeaderSecundario