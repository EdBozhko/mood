import React, { FC, useRef, useState, useEffect } from 'react';
import { CardWrap, Card, CardBackground, CardInfo, CardTitle, CardDescription } from './CardParallax.styles';

interface CardParallaxProps {
  cardImg: string;
  cardTitle?: string;
  cardDescription?: string;
}

const CardParallax: FC<CardParallaxProps> = ({ cardImg, cardTitle, cardDescription }) => {
  const [state, setState] = useState({
    mouseX: 0,
    mouseY: 0,
    height: 0,
    width: 0,
  });
  const cardWrapRef = useRef(null);
  const cardRef = useRef(null);
  const cardBackgroundRef = useRef(null);
  useEffect(() => {
    setState({ ...state, height: cardWrapRef.current.clientHeight, width: cardWrapRef.current.clientWidth });
  }, []);
  const onMouseMoveHandler = (e) => {
    let mouseX = e.pageX - cardWrapRef.current.offsetLeft - state.width / 2;
    let mouseY = e.pageY - cardWrapRef.current.offsetTop - state.height / 2;

    setState({ ...state, mouseX: mouseX, mouseY: mouseY });

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 30;
    const angleY = (state.mouseY / state.height) * -30;
    cardRef.current.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -40;
    const posY = (state.mouseY / state.height) * -40;
    cardBackgroundRef.current.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  };
  const onMouseOutHandler = () => {
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBackgroundRef.current.style.transform = `translateX(0px) translateY(0px)`;
  };

  return (
    <CardWrap ref={cardWrapRef} onMouseMove={onMouseMoveHandler} onMouseOut={onMouseOutHandler}>
      <Card ref={cardRef}>
        <CardBackground cardImg={cardImg} ref={cardBackgroundRef} />
        <CardInfo>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardInfo>
      </Card>
    </CardWrap>
  );
};
export default CardParallax;
