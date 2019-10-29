import React from "react";
import Carousel from "../components/Carousel";
import CarouselButton from "../components/CarouselButton";
import CarouselSlide from "../components/CarouselSlide";
import slides from "../slides";
const text = "I am a button";
const dataAction = "prev";
const onClick = () => {};

export default {
  title: "Carousel"
};

export const carousel = () => <Carousel slidesData={slides} />;
export const carouselButton = () => (
  <CarouselButton data-action={dataAction} onClick={onClick}>
    {text}
  </CarouselButton>
);
export const carouselSlide = () => <CarouselSlide {...slides[1]} />;
