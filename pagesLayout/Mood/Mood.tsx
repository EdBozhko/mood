import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { H1, SliderBox, SliderItem, HeadingContainer, Heading, Title, Subtitle, TitleContainer } from './Mood.styles';
import Footer from './components/Footer/Footer';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';

interface MoodPageProps {
  data?: {};
}

const MoodPage: FC<MoodPageProps> = ({ data }) => {
  const sliderRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      const navigation = document.querySelector('#fp-nav ul');
      const slider = document.createElement('div');

      const svg = document.createElement('svg');

      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.appendChild(defs);
      const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'fancy-goo');
      defs.appendChild(filter);
      slider.setAttribute('id', 'slider');

      const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
      feGaussianBlur.setAttribute('in', 'SourceGraphic');
      feGaussianBlur.setAttribute('stdDeviation', '5');
      feGaussianBlur.setAttribute('result', 'blur');
      filter.appendChild(feGaussianBlur);

      const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
      feColorMatrix.setAttribute('in', 'blur');
      feColorMatrix.setAttribute('type', 'matrix');
      feColorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10');
      feColorMatrix.setAttribute('result', 'goo');
      filter.appendChild(feColorMatrix);

      const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
      feComposite.setAttribute('in', 'SourceGraphic');
      feComposite.setAttribute('in2', 'goo');
      feComposite.setAttribute('operator', 'atop');
      filter.appendChild(feComposite);

      navigation.appendChild(slider);
      navigation.appendChild(svg);

      const links = document.querySelectorAll(' #fp-nav ul li a');

      function callback(mutationsList) {
        mutationsList.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const target = mutationsList[1];
            const position = {
              top: target.target.offsetParent.offsetTop,
              left: target.target.offsetParent.offsetLeft,
            };
            slider.style.marginTop = '0px';
            slider.style.top = `${position.top}px`;
          }
        });
      }

      const mutationObserver = new MutationObserver(callback);
      links.forEach((link) => {
        mutationObserver.observe(link, { attributes: true });
      });
    }, 100);
  }, []);

  if (!data.slides.length) {
    return null;
  }

  return (
    <>
      <H1>{data.h1}</H1>
      <SliderBox>
        <ReactFullpage
          ref={sliderRef}
          navigation
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {data.slides.map((slide, index) => {
                return (
                  <div key={index} className="section" onClick={() => comp.fullpageApi.moveTo(1, 0)}>
                    <Link href={slide.link}>
                      <SliderItem blackout={slide.blackout}>
                        <HeadingContainer>
                          <Heading>{slide.heading}</Heading>
                          <TitleContainer>
                            <Title>{slide.title}</Title>
                            <Subtitle>{slide.subtitle}</Subtitle>
                          </TitleContainer>
                        </HeadingContainer>
                        <Image objectFit="cover" objectPosition="center" layout="fill" src={slide.src} alt={slide.alt} />
                      </SliderItem>
                    </Link>
                  </div>
                );
              })}
              <div className="section">
                <Footer title="Замовити безкоштовну консультацію" />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </SliderBox>
    </>
  );
};

export default MoodPage;
