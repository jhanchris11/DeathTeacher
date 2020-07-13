import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
const Stream = () => {

    return (
        <div className='Container-Stream'>
            <Card
                title='Stream'
                hoverable
                style={{ width: 400, textAlign: 'center' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Teoria Historia Universal" description="www.instagram.com" />
            </Card>
        </div>

    )
}

export default Stream
