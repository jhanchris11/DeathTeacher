import React from "react";
import { Card } from "antd";

import ReactPlayer from "react-player";
const { Meta } = Card;

const Stream = () => {
  return (
    <div className="box-stream">
      <div className="box-player">
        <Card
          hoverable
          style={{ height: "100%",background: "#071e3d" }}
          cover={
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url="https://storage.googleapis.com/cinetask.appspot.com/DeepFakeVideo_1594957777.mp4"
            />
          }
        >
          <Meta title="Chess professor" description="Chess World CampionShip" />
        </Card>
      </div>
    </div>
  );
};

export default Stream;
