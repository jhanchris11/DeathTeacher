import React, { useRef, useContext, useEffect } from 'react'
import { Card } from 'antd';
import ReactPlayer from 'react-player'

import ContextMessage from '../../Context/ContextMessage';


const { Meta } = Card;


const Stream = () => {
    const { beginAudio, finishAudio } = useContext(ContextMessage)
    const [play, setPlay] = React.useState(false)

    useEffect(() => {
        if (beginAudio) {
            handlerPlayPause()
        }
    }, [beginAudio])

    useEffect(() => {
        if (finishAudio) {
            handlerControls()
            handlerStop()
        }
    }, [finishAudio])


    const player = useRef(null);

    const handlerPlayPause = () => {
        setPlay(true)
    }
    const handlerStop = () => {
        setPlay(false)
    }
    const handlerControls = () => {
        player.current.seekTo(0);
    }

    return (
        <div className="box-stream">
            <div className="box-player">
                <Card
                    hoverable
                    style={{ height: "100%", background: "#071e3d" }}
                    cover={
                        <ReactPlayer width='100%' height='100%' playing={play} loop={true} controls={false} url='https://storage.googleapis.com/cinetask.appspot.com/DeepFakeVideo_1594957777.mp4' ref={player} />
                    }
                >
                    <Meta title="Chess professor" description="Chess World CampionShip" />
                </Card>
            </div>
        </div>

    )
}

export default Stream
