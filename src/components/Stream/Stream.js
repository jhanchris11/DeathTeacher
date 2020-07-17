import React from 'react'
import { Card } from 'antd';

import ReactPlayer from 'react-player'
const { Meta } = Card;

const Stream = () => {

    return (
        <div className='box-stream'>
            <div className='box-player'>
                <h1>Explicacion ... </h1>
                <div>
                    <ReactPlayer controls width='350' height='300' url='https://storage.googleapis.com/cinetask.appspot.com/DeepFakeVideo_1594957777.mp4' />
                </div>
            </div>
        </div>

    )
}

export default Stream
