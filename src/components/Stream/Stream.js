import React, { useRef } from 'react'
import { Card } from 'antd';

import ReactPlayer from 'react-player'
const { Meta } = Card;

const Stream = () => {

    const [play, setPlay] = React.useState(false)

    const [controls, setControls] = React.useState(false)

    const player = useRef(null);

    const handlerPlayPause = (e) => {
        setPlay(true)
    }
    const handlerStop = () => {
        setPlay(false)
    }
    const handlerControls = () => {
        player.current.seekTo(0);
    }



    return (
        <div className='box-stream'>
            <div className='box-player'>
                <h1>Explicacion ... </h1>
                <div>
                    <ReactPlayer width='350' height='300' playing={play} loop={true} controls={true} url='https://storage.googleapis.com/cinetask.appspot.com/DeepFakeVideo_1594957777.mp4' ref={player} />
                </div>
                <button onClick={handlerPlayPause}>play</button>
                <button onClick={handlerStop}>Stop</button>
                <button onClick={handlerControls}>Reinicar</button>
            </div>
        </div>

    )
}

export default Stream
