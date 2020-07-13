import React from 'react'
import { Breadcrumb } from 'antd'

const ContentMain = ({ seccionBot, seccionPreguntas, seccionPerfil }) => {

    // console.log(breadCrumbs)
    return (

        <Breadcrumb className='cl-breadcrumb'>
            <Breadcrumb.Item>{seccionPreguntas ? seccionPreguntas : seccionBot ? seccionBot : seccionPerfil}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ContentMain
