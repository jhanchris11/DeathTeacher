import React, { Fragment, useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer/Footer";
import BreadCrumb from "../components/Layout/BreadCrumb/BreadCrumb";
import Stream from "../components/Stream/Stream";
import Chat from "../components/Bot/Chat/Chat";
import Search from "../components/Search/Search";
import Topic from "../components/CarouselTopic/Topic";
import messageBotContext from "../context/messageBot/messageBotContext";
import profesorContext from "../context/professor/profesorContext";
import spinnerContext from "../context/spinner/spinnerContext";

import useScreenRecording from "../hooks/useScreenRecording";
import useCustomModal from "../hooks/useCustomModal";

import CategoryChoose from "../components/CategoryChoose/CategoryChoose";
import CustomModal from "../components/shared/CustomModal/CustomModal";
import CustomTitle from "../components/shared/CustomTitle/CustomTitle";

import { getProfessorByCategoryId } from "../services/professorService";
import CustomSpinner from "../components/shared/CustomSpinner/CustomSpinner";

const { Content } = Layout;

const Main = () => {
  const [seccionBot] = useState("Bot");
  const [categorySelected, setCategorySelected] = useState(null);
  const { searchInput, finishClass, classText } = useContext(messageBotContext);
  const { setProfessor } = useContext(profesorContext);
  const { setLoading } = useContext(spinnerContext);

  const {
    ScreenRecording,
    handleStartRecording,
    handleStopRecording
  } = useScreenRecording();
  const {
    isVisible: visibleModal,
    toggleModal: toggleModal
  } = useCustomModal();

  useEffect(() => {
    window.speechSynthesis.cancel();
    toggleModal();
  }, []);

  useEffect(() => {
    handleGetProfessor();
  }, [categorySelected]);

  useEffect(() => {
    classText != null && setLoading(false);
  }, [classText]);

  const handleGetProfessor = async () => {
    let { data } = await getProfessorByCategoryId(categorySelected);
    setProfessor(data["professor"]);
  };

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

  const handleSubmitDataParent = value => {
    setCategorySelected(value);
    toggleModal();
  };

  return (
    <Fragment>
      <CustomModal
        title={"Select your category"}
        isVisible={visibleModal}
        toggleModal={toggleModal}
      >
        <CategoryChoose handleSubmitDataParent={handleSubmitDataParent} />
      </CustomModal>

      <Content className="cl-content">
        <CustomTitle text={"Learning about you want"} />

        <div className="cl-search">
          <Search />
        </div>

        <div>
          <ScreenRecording />
        </div>

        <div>
          <CustomSpinner />
          {searchInput !== "" && classText != null && !finishClass && (
            <Fragment>
              <div className="çl-slider">
                <Topic
                  topic={searchInput}
                  handleStartRecordingEvent={handleStartRecordingEvent}
                  handleStopRecording={handleStopRecording}
                  categorySelected={categorySelected}
                />
              </div>
            </Fragment>
          )}

          {searchInput !== "" && classText != null && finishClass && (
            <div className="cl-content-bg" style={{ marginTop: 30 }}>
              <div className="contendor-stream" style={{ width: "30%" }}>
                <p style={{textAlign: "center",fontWeight: "bold", fontSize: "1.5em"}}>
                  Teacher Bot
                </p>
                <Stream />
              </div>
              <div className="contenedor-chat">
                <Chat />
              </div>
            </div>
          )}
        </div>
      </Content>
      <FooterMain />
    </Fragment>
  );
};

export default Main;
