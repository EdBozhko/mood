import React, { FC, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { SliderBox, SliderItem, MoodGlobalStyle } from './Mood.styled';
import Slide_1 from './assets/static/slide_1.png';
import Slide_2 from './assets/static/slide_2.jpeg';
import Footer from '@comp/Footer';
const data = [
  { src: Slide_1, alt: 'slide 1' },
  { src: Slide_2, alt: 'slide 2' },
];

const MoodPage: FC = () => {
  const carousel = useRef(null);
  const prewSlide = () => {
    carousel.current.slidePrev();
  };
  const nextSlide = () => {
    carousel.current.slideNext();
  };
  const handleScroll = (e) => {
    e.preventDefault();
    const { deltaY } = e;
    console.log(deltaY);

    if (deltaY < 0) {
      prewSlide();
    }
    if (deltaY > 0) {
      nextSlide();
    }
  };
  const Slides = data.map((slide) => {
    return <img src={slide.src} alt={slide.alt} />;
  });
  return (
    <>
      <MoodGlobalStyle />
      <SliderBox onWheel={handleScroll}>
        <Carousel ref={carousel} className="slider" itemsToShow={1} verticalMode={true} itemsToScroll={1} isRTL={false} showArrows={false} pagination={false} enableMouseSwipe={false}>
          {Slides}
          <Footer />
        </Carousel>
      </SliderBox>
    </>
  );
};

export default MoodPage;
