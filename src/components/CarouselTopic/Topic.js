import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getClass } from "./classJson";
import { speechTextSlider } from "../../Helpers/speechHelper";
import { separateSlider } from "../../Helpers/sliderHelper";

import Stream from "../Stream/Stream";
import "./TopicStyle.scss";

const Topic = ({ topic }) => {
  var slider;
  const [carouselSubTopics, setSubTopics] = useState([]);
  const [beginClass, setBeginClass] = useState("aboveOfSliders");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    handleSliders();
  }, [beginClass]);

  useEffect(() => {
    buildingCarousel();
  }, []);

  function next() {
    slider.slickNext();
  }

  function previous() {
    slider.slickPrev();
  }

  function handleSpeech() {
    setBeginClass("belowOfSliders");
  }

  const buildingCarousel = () => {
    let subTopics = [];
    let topicJson = getClass();
    Object.keys(topicJson).map(slider => {
      let tempArray = separateSlider(topicJson[slider]);
      tempArray.length > 0
        ? tempArray.map(text => {
            subTopics.push({ title: slider, content: text });
          })
        : subTopics.push({ title: slider, content: topicJson[slider] });
    });
    setSubTopics(subTopics);
  };

  const handleSliders = async () => {
    for (let subtopic of carouselSubTopics) {
      await speechTextSlider(subtopic.content);
      window.speechSynthesis.cancel();
      next();
    }
  };

  return (
    <Fragment>
      <h3 className="topicTitle">La clase de hoy es sobre : {topic}</h3>
      <div className="box-slider">
        <Fragment>
          <div className="leftContainer">
            <Slider ref={c => (slider = c)} {...settings}>
              {carouselSubTopics &&
                carouselSubTopics.map(slider => (
                  <div className="subTopic">
                    <h3 className="subTopicTitle">{slider.title}</h3>
                    <p className="sutbopicContent">{slider.content}</p>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="rigthContainer">
            <Stream />
          </div>
        </Fragment>
      </div>
      <div className={`customSlider box-slider ${beginClass}`}>
        <button className="beginClassButton" onClick={handleSpeech}>
          Empezar clase
        </button>
      </div>
    </Fragment>
  );
};

export default Topic;
