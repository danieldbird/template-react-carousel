import React from "react";

function Carousel(props) {
  const { slides, index } = props;

  const getClassName = (slideIndex) => {
    let position = "nextSlide";
    if (slideIndex === index) {
      position = "activeSlide";
    }
    if (
      slideIndex === index - 1 ||
      (index === 0 && slideIndex === slides.length - 1)
    ) {
      position = "lastSlide";
    }
    return position;
  };

  return (
    <div className="carousel">
      {slides.map(({ id }, slideIndex) => {
        return (
          <div key={id} className={`slide ${getClassName(slideIndex)}`}>
            {id}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
