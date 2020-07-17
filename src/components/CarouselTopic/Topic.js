import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getClass } from "./classJson";
import { speechTextSlider } from "../../Helpers/speechHelper";
import { separateSlider } from "../../Helpers/sliderHelper"

const Topic = () => {
  var slider;
  const [carouselSubTopics, setSubTopics] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    window.speechSynthesis.cancel();
    buildingCarousel();
  }, []);

  useEffect(() => {
    handleSliders();
  }, [carouselSubTopics]);

  function next() {
    slider.slickNext();
  }

  function previous() {
    slider.slickPrev();
  }

  const buildingCarousel = () => {
    let subTopics = [];
    let topicJson = getClass();
    Object.keys(topicJson).map(slider => {
      let tempArray = separateSlider(topicJson[slider]);
      tempArray.length > 0 ? tempArray.map(text => {subTopics.push({ title: slider, content: text });}) : subTopics.push({ title: slider, content: topicJson[slider] });
    });
    setSubTopics(subTopics);
  };

  const handleSliders = async () => {
    for (let subtopic of carouselSubTopics) {
      await speechTextSlider(subtopic.content);
      next();
    }
  };

  return (
    <Fragment>
      <div className="box-slider">
        <Slider ref={c => (slider = c)} {...settings}>
          {carouselSubTopics &&
            carouselSubTopics.map(slider => (
              <div>
                <h3>{slider.title}</h3>
                <p>{slider.content}</p>
              </div>
            ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default Topic;
