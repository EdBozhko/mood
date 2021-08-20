import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { H1, SliderBox, SliderItem, MoodGlobalStyle, HeadingContainer, Heading, Title, Subitle, InnerVisible, InnerSEO } from './Mood.styled';
import Slide_1 from './assets/static/slide_1.png';
import Slide_2 from './assets/static/slide_2.jpeg';
import Slide_3 from './assets/static/slide_3.jpg';
import Slide_4 from './assets/static/slide_4.jpg';
import Slide_5 from './assets/static/slide_5.png';
import Slide_6 from './assets/static/slide_6.png';
import Footer from '@comp/Footer';
import Link from 'next/link';
const data = [
  { src: Slide_1, alt: 'slide 1', blackout: 0.5, heading:'choose your design', title:'', subtitle:'', },
  { src: Slide_2, alt: 'slide 2', blackout: 0.2, heading:'choose your design', title:'', subtitle:'',  },
  { src: Slide_3, alt: 'slide 3', blackout: 0, heading:'choose your design', title:'', subtitle:'',  },
  { src: Slide_4, alt: 'slide 4', blackout: 0.1, heading:'choose your design', title:'', subtitle:'',  },
  { src: Slide_5, alt: 'slide 5', blackout: 0.5, heading:'choose your design', title:'', subtitle:'',  },
  { src: Slide_6, alt: 'slide 6', blackout: 0.5, heading:'choose your design', title:'', subtitle:'',  },
];

const MoodPage: FC = () => {
  const carousel = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  console.log(carousel);
  
  const prewSlide = () => {
    carousel.current.slidePrev();
  };
  const nextSlide = () => {
    carousel.current.slideNext();
  };
  const handleScroll = (e) => {
    e.preventDefault();
    const { deltaY } = e;

    if (deltaY < 0 && currentSlideIndex > 0) {
      setCurrentSlideIndex(prev=>prev-1)
      prewSlide();
    }
    if (deltaY > 0 && currentSlideIndex < data.length) {
      setCurrentSlideIndex(prev=>prev+1)
      nextSlide();
    }
  };
  const Slides = data.map((slide, index) => {
    return (
      <Link href="/stages">
        <SliderItem blackout={slide.blackout}>
          <HeadingContainer>
            <Heading>{slide.heading}</Heading>
            <Title>{slide.title}</Title>
            <Subitle>{slide.subtitle}</Subitle>
          </HeadingContainer>
          <Image  objectFit='cover' objectPosition='center' layout='fill' key={index} src={slide.src} alt={slide.alt} />
        </SliderItem>
      </Link>
    );
  });
  return (
    <>
      <MoodGlobalStyle />
      <H1></H1>
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
