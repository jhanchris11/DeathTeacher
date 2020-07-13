import React, { Fragment, useState } from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
import Stream from '../components/Stream/Stream'
import Chat from '../components/Bot/Chat/Chat'

const { Content } = Layout
const Main = () => {

    const [seccionBot] = useState('Bot')
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb seccionBot={seccionBot} />
                <div className='cl-content-bg'>
                    <Stream />
                    <Chat />
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default Main