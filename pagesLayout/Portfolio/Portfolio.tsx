import React, { FC, useState, useRef, useEffect } from 'react';
import HeroBlock from '@comp/HeroBlock';
import Image from 'next/image';
import {
  FlexContainer,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ColumnFour,
  Galleries,
  GalleriesList,
  GalleriesItem,
  SliderWrapper,
  SliderContainer,
  SliderItem,
  CloseButton,
  Line,
} from './Portfolio.styles';
import { Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio } from './components/Gallery';
import CardParallax from '@comp/CardParallax';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = {
  title: 'портфоліо',
  subtitle: 'знайдіть своє надхнення',
  galleries: [Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio],
};

const PortfolioPage: FC = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const [activeGallery, setActiveGallery] = useState(0);
  const onClickHandler = (index) => {
    setActiveGallery(index);
    setIsSliderOpen(true);
  };
  const galleriesList = data.galleries.map((gallery, index) => {
    return (
      <GalleriesItem key={index} onClick={() => onClickHandler(index)}>
        <CardParallax cardImg={gallery.gallery[0].src} cardTitle={gallery.title} cardDescription={gallery.description} key={index} />
      </GalleriesItem>
    );
  });
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const [sliderContainer, setSliderContainer] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    console.log(sliderRef);
    setSliderContainer({
      width: sliderContainerRef.current.clientWidth,
      height: sliderContainerRef.current.clientHeight,
    });
  }, []);
  const Slides = data.galleries[activeGallery].gallery.map((image, index) => {
    return (
      <SliderItem key={index}>
        <Image objectPosition="center" width={(sliderContainer.height / image.height) * image.width} height={sliderContainer.height} key={index} src={image.src} alt={image.alt} />
      </SliderItem>
    );
  });
  const settings = {
    className: 'slider variable-width',
    dots: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    variableWidth: true,
  };
  const closeButtonHandler = () => {
    setIsSliderOpen(false);
    sliderRef.current.slickGoTo(0);
  };
  return (
    <>
      <HeroBlock title={data.title} subtitle={data.subtitle}>
        <FlexContainer>
          <ColumnOne />
          <ColumnTwo />
          <ColumnThree />
          <ColumnFour />
        </FlexContainer>
      </HeroBlock>
      <SliderWrapper isSliderOpen={isSliderOpen}>
        <CloseButton onClick={closeButtonHandler}>
          <Line>Close</Line>
        </CloseButton>
        <SliderContainer ref={sliderContainerRef}>
          <Slider ref={sliderRef} {...settings}>
            {Slides}
          </Slider>
        </SliderContainer>
      </SliderWrapper>
      <Galleries>
        <GalleriesList>{galleriesList}</GalleriesList>
      </Galleries>
    </>
  );
};

export default PortfolioPage;
