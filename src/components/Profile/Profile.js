import React from 'react'
import profile from '../../assets/profile.png'
import { Card } from 'antd'

const { Meta } = Card

const Profile = () => {

    return (

        <Card
            title='Perfil'
            hoverable
            style={{ width: 400, height: 400, textAlign: 'center' }}
            cover={<img alt="example" src={profile} />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default Profile
