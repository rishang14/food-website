import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevslider = () => {
    const firstSlider = currentIndex === 0;
    const newIndex = firstSlider ? sliders.length - 1 : currentIndex - 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const firstSlider = currentIndex === sliders.length - 1;
    console.log("next slider ", firstSlider);
    console.log("slider length", sliders.length - 1);
    const newIndex = firstSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        className="hidden group-hover:block absolute bg-orange-500 top-[50%]  z-10 left-5  text-2xl rounded-full p-2 text-white cursor-pointer  -translate-x-0 translate-y-[-50%]"
        onClick={prevslider}
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className="hidden group-hover:block absolute bg-orange-500 top-[50%]  z-10 right-5 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer"
        onClick={nextSlider}
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((slideItem, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer"
            onClick={() => moveToNextSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
