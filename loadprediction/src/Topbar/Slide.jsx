import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: '../Resources/image1.png' },
    { url: '../Resources/image2.png' },
    { url: '../Resources/image3.png' },
    { url: '../Resources/image4.png' },
    { url: '../Resources/image5.png' },
  ];

const Slide = () => {
  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slide;