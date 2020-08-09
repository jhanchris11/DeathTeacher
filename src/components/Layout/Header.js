
import React from 'react'
import { Layout } from 'antd'
import HeadMenu from './HeadMenu'
const { Header } = Layout

const HeaderSecundario = () => {

    return (
        <Header className='cl-header'>
            <HeadMenu />
        </Header>
    )
}

export default HeaderSecundario