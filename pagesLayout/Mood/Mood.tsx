import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { H1, SliderBox, SliderItem, HeadingContainer, Heading, Title, Subtitle, TitleContainer } from './Mood.styles';
import Slide_1 from './assets/static/slide_1.png';
import Slide_2 from './assets/static/slide_2.jpeg';
import Slide_3 from './assets/static/slide_3.jpg';
import Slide_4 from './assets/static/slide_4.jpg';
import Slide_5 from './assets/static/slide_5.png';
import Slide_6 from './assets/static/slide_6.png';
import Footer from '@comp/Footer';
import Link from 'next/link';
import SliderPagination from '@comp/SliderPagination';
const data = {
  h1: 'Mood - студія дизайну, яка допоможе створити не тільки зовнішню красу, але і Ваш внутрішній настрій. Наша спеціалізація - дизайн інтер’єрів, архітектурне проектування, ландшафтний та технічний дизайн, а також ми надаємо комплекс послуг.',
  slides: [
    { link: '/stages', src: Slide_1, alt: 'послуга - дизайн інтер’єру', blackout: 0.3, heading: 'choose your design', title: 'дизайн інтер’єру', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_2, alt: 'послуга - архітектурне проектування', blackout: 0.45, heading: 'choose your design', title: 'архітектурне проектування', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_3, alt: 'послуга - ландшафтний дизайн', blackout: 0.47, heading: 'choose your design', title: 'ландшафтний дизайн', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_4, alt: 'послуга - технічний дизайн', blackout: 0.4, heading: 'choose your design', title: 'технічний дизайн', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_5, alt: 'послуга - комплекс послуг', blackout: 0.35, heading: 'choose your design', title: 'комплекс послуг', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_6, alt: 'дизайн, який створює настрій', blackout: 0.2, heading: '', title: 'дизайн, який створює настрій', subtitle: 'замовити проект' },
  ],
};
const MoodPage: FC = () => {
  const carousel = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prewSlide = () => {
    carousel.current.slidePrev();
  };
  const nextSlide = () => {
    carousel.current.slideNext();
  };
  const handleScroll = (e) => {
    // e.preventDefault();
    const { deltaY } = e;

    if (deltaY < 0 && currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      prewSlide();
    }
    if (deltaY > 0 && currentSlideIndex < data.slides.length) {
      setCurrentSlideIndex((prev) => prev + 1);
      nextSlide();
    }
  };
  const Slides = data.slides.map((slide, index) => {
    return (
      <Link href={slide.link}>
        <SliderItem blackout={slide.blackout}>
          <HeadingContainer>
            <Heading>{slide.heading}</Heading>
            <TitleContainer>
              <Title>{slide.title}</Title>
              <Subtitle>{slide.subtitle}</Subtitle>
            </TitleContainer>
          </HeadingContainer>
          <Image objectFit="cover" objectPosition="center" layout="fill" key={index} src={slide.src} alt={slide.alt} />
        </SliderItem>
      </Link>
    );
  });
  return (
    <>
      <H1>{data.h1}</H1>
      <SliderBox onWheel={handleScroll}>
        <Carousel
          ref={carousel}
          className="slider"
          itemsToShow={1}
          verticalMode={true}
          itemsToScroll={1}
          isRTL={false}
          showArrows={false}
          pagination={true}
          enableMouseSwipe={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return <SliderPagination className="slider-pagination" pages={pages} activePage={activePage} onClick={onClick} />;
          }}
        >
          {Slides}
          <Footer title="Замовити безкоштовну консультацію" />
        </Carousel>
      </SliderBox>
    </>
  );
};

export default MoodPage;
