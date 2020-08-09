import React, { useState, useEffect, Fragment, useContext } from "react";
import Slider from "react-slick";
import { speechTextSlider } from "../../Helpers/speechHelper";
import { separateSlider } from "../../Helpers/sliderHelper";
import Stream from "../Stream/Stream";
import ContextMessage from "../../Context/ContextMessage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopicStyle.scss";

const Topic = ({ topic }) => {
    var slider;
    const [carouselSubTopics, setSubTopics] = useState([]);
    const [beginClass, setBeginClass] = useState("aboveOfSliders");
    const { setFinishClass, classText } = useContext(ContextMessage)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if (classText !== null) {
            buildingCarousel(classText)
        }
    }, [classText])

    useEffect(() => {
        handleSliders();
    }, [beginClass]);

    function next() {
        slider.slickNext();
    }

    function previous() {
        slider.slickPrev();
    }

    function handleSpeech() {
        setBeginClass("belowOfSliders");
    }

    const buildingCarousel = (text) => {
        let subTopics = [];
        let topicJson = text;
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
        let c = 0
        // setBeginAudio(true)
        for (let subtopic of carouselSubTopics) {
            await speechTextSlider(subtopic.content);
            window.speechSynthesis.cancel();
            next();
            if (carouselSubTopics.length === c + 1) {
                setFinishClass(true)
            }
            c++
        }
    };

    const handlerPauseClass = () => {
        window.speechSynthesis.pause()
    }
    const handlerContinuoClass = () => {
        window.speechSynthesis.resume()
    }
    return (
        <Fragment>
            <h3 className="topicTitle">La clase de hoy es sobre : {topic}</h3>
            {classText !== null && (
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
                            <div className='boxClass'>
                                <button className="beginClassButton boxButton" onClick={handlerContinuoClass} >
                                    Continuar con la Clase
                        </button>
                                <button className="beginClassButton" onClick={handlerPauseClass} >
                                    Pausar Clase
                        </button>
                            </div>
                        </div>
                        <div className="rigthContainer">
                            <Stream />
                        </div>

                    </Fragment>
                </div>
            )}

            <div className={`customSlider box-slider ${beginClass}`}>
                <button className="beginClassButton" onClick={handleSpeech}>
                    Empezar clase
                 </button>
            </div>
        </Fragment>
    );
};

export default Topic;
