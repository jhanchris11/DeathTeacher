import React, { Fragment, useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer";
import Breadcrumb from "../components/Layout/Content";
import Stream from "../components/Stream/Stream";
import Chat from "../components/Bot/Chat/Chat";
import Search from "../components/Layout/Search";
import Topic from "../components/CarouselTopic/Topic";
import ContextMessage from "../Context/ContextMessage";

import useScreenRecording from "../hooks/useScreenRecording";

const { Content } = Layout;

const Main = () => {
  const [seccionBot] = useState("Bot");
  const { searchInput } = useContext(ContextMessage);
  const {
    blobVideoState,
    ScreenRecording,
    handleStartRecording,
    handleStopRecording
  } = useScreenRecording();

  useEffect(() => {
    window.speechSynthesis.cancel();
  }, []);

  const handleStartRecordingEvent = (
    screenX,
    screenY,
    screenWidth,
    screenHeigth,
    canvasX,
    canvasY,
    canvasWidth,
    canvasHeigth
  ) => {
    handleStartRecording(
      screenX,
      screenY,
      screenWidth,
      screenHeigth,
      canvasX,
      canvasY,
      canvasWidth,
      canvasHeigth
    );
  };

  return (
    <Fragment>
      <Content className="cl-content">
        <Breadcrumb seccionBot={seccionBot} />
        <div className="cl-search">
          <Search />
        </div>

        <div>
          <ScreenRecording />
        </div>
        {searchInput !== "" && (
          <Fragment>
            <div className="çl-slider">
              <Topic
                topic={searchInput}
                handleStartRecordingEvent={handleStartRecordingEvent}
                handleStopRecording={handleStopRecording}
              />
            </div>
          </Fragment>
        )}

        {searchInput !== "" && (
          <div className="cl-content-bg">
            <div className="contendor-stream">
              <Stream />
            </div>
            <div className="contenedor-chat">
              <Chat />
            </div>
          </div>
        )}
      </Content>
      <FooterMain />
    </Fragment>
  );
};

export default Main;
