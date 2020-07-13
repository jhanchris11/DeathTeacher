import React, { Fragment, useState } from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
const { Content } = Layout
const Questions = () => {
    const [seccionPreguntas] = useState('Preguntas')
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb seccionPreguntas={seccionPreguntas} />
                <div className='cl-content-bg'>
                    <p>Gaa</p>
                    {/* <i class="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default Questions