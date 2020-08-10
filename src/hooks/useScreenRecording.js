import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  getScreenStream,
  addStreamStopListener
} from "../Helpers/recordScreen";
import RecordRTC from "recordrtc";

import { uploadVideo } from "../services/BotService";

const useScreenRecording = () => {
  const mediaElementRef = useRef();
  const canvasElementRef = useRef();
  const [blobVideoState, setBlobVideo] = useState(null);
  var recorder;

  useEffect(() => {
    mediaElementRef.current.style.display = "none";
    canvasElementRef.current.style.display = "none";
  }, []);

  const buildingCanvasFrame = (
    screenX,
    screenY,
    screenWidth,
    screenHeigth,
    canvasX,
    canvasY,
    canvasWidth,
    canvasHeigth
  ) => {
    canvasElementRef.current
      .getContext("2d")
      .drawImage(
        mediaElementRef.current,
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

  const handleStartRecording = (
    screenX,
    screenY,
    screenWidth,
    screenHeigth,
    canvasX,
    canvasY,
    canvasWidth,
    canvasHeigth
  ) => {
    getScreenStream(screen => {
      var inited = false;
      mediaElementRef.current.ontimeupdate = function(ev) {
        if (!inited) {
          mediaElementRef.current.srcObject = screen;
          mediaElementRef.current.screen = screen;
          inited = true;
        }
        buildingCanvasFrame(
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
      mediaElementRef.current.ontimeupdate();

      addStreamStopListener(screen, () => {
        handleStopRecording();
      });

      recorder = RecordRTC(canvasElementRef.current.captureStream(), {
        type: "video"
      });
      recorder.startRecording();
    });
  };

  const handleStopRecording = async () => {
    recorder.stopRecording(async function() {
      let blob = recorder.getBlob();

      const formData = new FormData();
      formData.append("video", blob);
      let response = await uploadVideo(formData);

      setBlobVideo(blob);
      mediaElementRef.current.srcObject = null;
      mediaElementRef.current.src = URL.createObjectURL(blob);
      if (
        mediaElementRef.current.screen &&
        mediaElementRef.current.screen.getVideoTracks
      ) {
        mediaElementRef.current.screen.stop();
        mediaElementRef.current.screen = null;
      }
    });
  };

  const ScreenRecording = () => {
    return (
      <Fragment>
        <canvas
          ref={canvasElementRef}
        ></canvas>
        <video ref={mediaElementRef} autoPlay playsInline></video>
      </Fragment>
    );
  };

  return {
    blobVideoState,
    ScreenRecording,
    handleStartRecording,
    handleStopRecording
  };
};

export default useScreenRecording;
