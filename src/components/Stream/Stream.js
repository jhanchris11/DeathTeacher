import React, { useRef, useContext, useEffect, useState, Fragment, forwardRef, useImperativeHandle } from "react";
import { Card } from "antd";
import ReactPlayer from "react-player";

import messageBotContext from "../../context/messageBot/messageBotContext";
import profesorContext from "../../context/professor/profesorContext";

const { Meta } = Card;

const Stream = forwardRef((props, ref) => {
  const [play, setPlay] = useState(false);
  const player = useRef(null);
  const { professor } = useContext(profesorContext);

  useImperativeHandle(ref, () => ({
     handlerStopVideo  ()  {
      handlerControls();
      handlerStop();
    },
    handlerPlayPause () {
      setPlay(true);
    }
  }));

  const handlerStop = () => {
    setPlay(false);
  };
  const handlerControls = () => {
    player.current.seekTo(0);
  };

  return (
    <Fragment>
      {professor && (
        <div className="box-stream">
          <div className="box-player">
            <Card
              hoverable
              style={{ height: "100%", background: "#071e3d" }}
              cover={
                <ReactPlayer
                  width="100%"
                  height="100%"
                  playing={play}
                  loop={true}
                  controls={false}
                  url={professor['urlVideo']}
                  ref={player}
                />
              }
            >
              <Meta
                title={professor['fullName']}
                description={professor['additionalInformation'].filter(item => item.key == 'job')[0]['value']}
              />
            </Card>
          </div>
        </div>
      )}
    </Fragment>
  );
});

export default Stream;
