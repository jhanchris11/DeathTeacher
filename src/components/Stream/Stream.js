import React, { useRef } from 'react'
import { Card } from 'antd';

import ReactPlayer from "react-player";
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
    <div className="box-stream">
      <div className="box-player">
        <Card
          hoverable
          style={{ height: "100%",background: "#071e3d" }}
          cover={
           <ReactPlayer width='100%' height='100%' playing={play} loop={true} controls={true} url='https://storage.googleapis.com/cinetask.appspot.com/DeepFakeVideo_1594957777.mp4' ref={player} />
          }
        >
          <Meta title="Chess professor" description="Chess World CampionShip" />
        </Card>
      </div>
    </div>
  );
};

export default Stream;
