import React, { FC, useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { SliderBox, SliderItem, MoodGlobalStyle } from './Mood.styled';
import Slide_1 from './assets/static/slide_1.png';
import Slide_2 from './assets/static/slide_2.jpeg';
import Slide_3 from './assets/static/slide_3.jpg';
import Slide_4 from './assets/static/slide_4.jpg';
import Slide_5 from './assets/static/slide_5.png';
import Slide_6 from './assets/static/slide_6.png';
import Footer from '@comp/Footer';
import Link from 'next/link';
const data = [
  { src: Slide_1, alt: 'slide 1' },
  { src: Slide_2, alt: 'slide 2' },
  { src: Slide_3, alt: 'slide 3' },
  { src: Slide_4, alt: 'slide 4' },
  { src: Slide_5, alt: 'slide 5' },
  { src: Slide_6, alt: 'slide 6' },
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

    if (deltaY < 0) {
      prewSlide();
    }
    if (deltaY > 0) {
      nextSlide();
    }
  };
  const Slides = data.map((slide, index) => {
    return (
      <Link href="/stages">
        <SliderItem>
          <Image layout="intrinsic" height={900} width={1357} key={index} src={slide.src} alt={slide.alt} />
        </SliderItem>
      </Link>
    );
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
