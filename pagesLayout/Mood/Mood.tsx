import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { H1, SliderBox, SliderItem, HeadingContainer, Heading, Title, Subtitle, TitleContainer } from './Mood.styles';
import Slide_1 from './assets/static/slide_1.jpg';
import Slide_2 from './assets/static/slide_2.png';
import Slide_3 from './assets/static/slide_3.jpg';
import Slide_4 from './assets/static/slide_4.jpg';
import Slide_5 from './assets/static/slide_5.png';
import Slide_6 from './assets/static/slide_6.png';
import Footer from './components/Footer/Footer';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';

const data = {
  h1: 'Mood - студія дизайну, яка допоможе створити не тільки зовнішню красу, але і Ваш внутрішній настрій. Наша спеціалізація - дизайн інтер’єрів, архітектурне проектування, ландшафтний та технічний дизайн, а також ми надаємо комплекс послуг.',
  slides: [
    { link: '/stages', src: Slide_1, alt: 'послуга - дизайн інтер’єру', blackout: 0.5, heading: 'choose your design', title: 'дизайн інтер’єру', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_2, alt: 'послуга - архітектурне проектування', blackout: 0.45, heading: 'choose your design', title: 'архітектурне проектування', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_3, alt: 'послуга - ландшафтний дизайн', blackout: 0.5, heading: 'choose your design', title: 'ландшафтний дизайн', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_4, alt: 'послуга - технічний дизайн', blackout: 0.4, heading: 'choose your design', title: 'технічний дизайн', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_5, alt: 'послуга - комплекс послуг', blackout: 0.35, heading: 'choose your design', title: 'комплекс послуг', subtitle: 'дізнатись більше' },
    { link: '/stages', src: Slide_6, alt: 'дизайн, який створює настрій', blackout: 0.2, heading: '', title: 'дизайн, який створює настрій', subtitle: 'замовити проект' },
  ],
};
const MoodPage: FC = () => {
  useEffect(() => {
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
  }, []);

  if (!data.slides.length) {
    return null;
  }

  const Slides = data.slides.map((slide, index) => {
    return (
      <div key={index} className="section">
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
  });

  return (
    <>
      <H1>{data.h1}</H1>
      <SliderBox>
        <ReactFullpage
          navigation
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {Slides}
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
