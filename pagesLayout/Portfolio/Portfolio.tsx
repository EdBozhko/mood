import React, { FC, useState, useRef, useEffect } from 'react';
import HeroBlock from '@comp/HeroBlock';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { FlexContainer, ColumnOne, ColumnTwo, ColumnThree, ColumnFour, Galleries, GalleriesList, GalleriesItem, SliderWrapper, SliderContainer, SliderItem } from './Portfolio.styles';
import { Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio } from './components/Gallery';
import CardParallax from '@comp/CardParallax';

const data = {
  title: 'портфоліо',
  subtitle: 'знайдіть своє надхнення',
  galleries: [Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio],
};

const PortfolioPage: FC = () => {
  const carousel = useRef(null);

  const prewSlide = () => {
    carousel.current.slidePrev();
  };
  const nextSlide = () => {
    carousel.current.slideNext();
  };

  const [activeGallery, setActiveGallery] = useState(0);
  const onClickHandler = (index) => {
    setActiveGallery(index);
  };
  const galleriesList = data.galleries.map((gallery, index) => {
    return (
      <GalleriesItem key={index} onClick={() => onClickHandler(index)}>
        <CardParallax cardImg={gallery.gallery[0].src} cardTitle={gallery.title} cardDescription={gallery.description} key={index} />
      </GalleriesItem>
    );
  });

  const Slides = data.galleries[activeGallery].gallery.map((image, index) => {
    console.log();

    return (
      <SliderItem>
        {/* <img key={index} src={image.src} alt={image.alt} /> */}
        <Image objectPosition="center" layout="fill" objectFit="contain" key={index} src={image.src} alt={image.alt} />
        {/* <Image objectPosition="center" width={1200} height={1600} key={index} src={image.src} alt={image.alt} /> */}
      </SliderItem>
    );
  });

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
      <SliderWrapper>
        <SliderContainer>
          <Carousel ref={carousel} className="slider" itemsToShow={1} itemsToScroll={1} isRTL={false} showArrows={true} pagination={true} enableMouseSwipe={false}>
            {Slides}
          </Carousel>
        </SliderContainer>
      </SliderWrapper>
      <Galleries>
        <GalleriesList>{galleriesList}</GalleriesList>
      </Galleries>
    </>
  );
};

export default PortfolioPage;
