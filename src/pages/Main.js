import React, { Fragment, useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer";
import Breadcrumb from "../components/Layout/Content";
import Stream from "../components/Stream/Stream";
import Chat from "../components/Bot/Chat/Chat";
import Search from "../components/Layout/Search";
import Topic from "../components/CarouselTopic/Topic";
import ContextMessage from "../Context/ContextMessage";
const { Content } = Layout;
const Main = () => {
  const [seccionBot] = useState("Bot");
  const { searchInput } = useContext(ContextMessage);
  // const { finishClass } = useContext(ContextMessage)
  useEffect(() => {
    window.speechSynthesis.cancel();
  }, []);

  return (
    <Fragment>
      <Content className="cl-content">
        <Breadcrumb seccionBot={seccionBot} />
        <div className="cl-search">
          <Search />
        </div>

        {searchInput !== "" && (
          <div className="çl-slider">
            <Topic topic={searchInput} />
          </div>
        )}

        {searchInput !== "" && (
          <div className="cl-content-bg">
            <div className="contendor-stream">
              {/* {finishClass && ( */}
              <Stream />
              {/* )} */}
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
