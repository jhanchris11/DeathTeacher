import React, { Fragment, useState } from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
import Perfil from '../components/Profile/Profile'
const { Content } = Layout
const Profile = () => {

    const [seccionPerfil] = useState('Perfil')
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb seccionPerfil={seccionPerfil} />
                <div className='cl-content-bg'>
                        <Perfil />
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default Profile