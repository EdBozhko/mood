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
  H1,
} from './Portfolio.styles';
import CardParallax from '@comp/CardParallax';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const PortfolioPage: FC = ({ data }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const [activeGallery, setActiveGallery] = useState(0);
  const onClickHandler = (index) => {
    setActiveGallery(index);
    setIsSliderOpen(true);
  };
  const galleriesList = data.galleries.map((gallery, index) => {
    return (
      <GalleriesItem key={index} onClick={() => onClickHandler(index)} onMouseEnter={() => setActiveGallery(index)} onTouchStart={() => setActiveGallery(index)}>
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
    setSliderContainer({
      width: sliderContainerRef.current.clientWidth,
      height: sliderContainerRef.current.clientHeight,
    });
  }, []);

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
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle}>
        <FlexContainer>
          <ColumnOne columnImg={data.column_1_img} />
          <ColumnTwo columnImg={data.column_2_img} />
          <ColumnThree columnImg={data.column_3_img} />
          <ColumnFour columnImg={data.column_4_img} />
        </FlexContainer>
      </HeroBlock>
      <SliderWrapper isSliderOpen={isSliderOpen}>
        <CloseButton onClick={closeButtonHandler}>
          <Line>Close</Line>
        </CloseButton>
        <SliderContainer ref={sliderContainerRef}>
          <Slider ref={sliderRef} {...settings}>
            {data.galleries.length > 0
              ? data.galleries[activeGallery].gallery.map((image, index) => {
                  return (
                    <SliderItem key={index}>
                      <Image objectPosition="center" width={(sliderContainer.height / image.height) * image.width} height={sliderContainer.height} key={index} src={image.src} alt={image.alt} />
                    </SliderItem>
                  );
                })
              : null}
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
