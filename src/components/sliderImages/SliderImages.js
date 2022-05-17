import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SliderImages = ({images}) => {

    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
        indicators: (i) => <div className="slider_indicator"> </div>
    };

    return (
        <Slide {...properties}>
            {images.map((each, index) => (
                <img src={each} key={index} />
            ))}
        </Slide>
    )
}
export default SliderImages;