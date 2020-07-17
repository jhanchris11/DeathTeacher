import React, { Fragment, useState, useContext } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer";
import Breadcrumb from "../components/Layout/Content";
import Stream from "../components/Stream/Stream";
import Chat from "../components/Bot/Chat/Chat";
// import Search from 'antd/lib/input/Search'
import SearchT from "../components/Search/SearchT";
import Topic from "../components/CarouselTopic/Topic";
import ContextMessage from "../Context/ContextMessage";

const { Content } = Layout;
const Main = () => {
  const [seccionBot] = useState("Bot");
  const { searchInput } = useContext(ContextMessage);

  return (
    <Fragment>
      <Content className="cl-content">
        <Breadcrumb seccionBot={seccionBot} />
        <div className="cl-search">
          <SearchT />
        </div>

        <div className="çl-slider">
          <Topic topic={searchInput}/>
        </div>

        <div className="cl-content-bg">
          <div className="contendor-stream">
            <Stream />
          </div>
          <div className="contenedor-chat">
            <Chat />
          </div>
        </div>
      </Content>
      <FooterMain />
    </Fragment>
  );
};

export default Main;
