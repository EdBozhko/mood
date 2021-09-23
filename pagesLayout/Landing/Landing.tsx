import React, { FC, useState, useRef, useEffect } from 'react';
import HeroBlock from '@comp/HeroBlock';
import Image from 'next/image';
import { FlexContainer, ColumnOne, ColumnTwo, ColumnThree, ColumnFour, H1, StepsContainer, StepsList, StepsItem, Illustration, Description } from './Landing.styles';
import { TelephoneBlock, Title, Telephone } from 'pagesLayout/Contacts/Contacts.styles';
import Call from './assets/static/call-k.svg';
import Dreams from './assets/static/dreams-k.svg';
import Enjoy from './assets/static/enjoy.svg';

const data = {
  h1: 'Mood - студія дизайну, яка допоможе створити не тільки зовнішню красу, але і Ваш внутрішній настрій. Наша спеціалізація - дизайн інтер’єрів, архітектурне проектування, ландшафтний та технічний дизайн, а також ми надаємо комплекс послуг.',
  title: 'mood',
  subtitle: 'реалізуй свої мрії',
  telephoneBlock: {
    title: 'Зателефонуйте нам',
    telephoneHref: '+380501111111',
    telephone: '+38 050 111 11 11',
  },
  stepsList: [
    {
      imgUrl: Call,
      description: 'ЗАТЕЛЕФОНУЙТЕ НАМ АБО ЗАЛИШІТЬ СВОЇ КОНТАКТИ',
    },
    {
      imgUrl: Dreams,
      description: 'РОЗКАЖІТЬ НАМ СВОЇ МРІЇ, ІДЕЇ ТА ФАНАТАЗІЇ',
    },
    {
      imgUrl: Enjoy,
      description: 'НАСОЛОДЖУЙТЕСЬ РЕЗУЛЬТАТОМ',
    },
  ],
};

const PortfolioPage: FC = () => {
  const stepsListRef = useRef(null);

  const handleResize = () => {
    setStepsListWidth(+stepsListRef.current.clientWidth);
  };

  const [stepsListWidth, setStepsListWidth] = useState(null);

  useEffect(() => {
    setStepsListWidth(+stepsListRef.current.clientWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = data.stepsList.map((value, index) => {
    return (
      <StepsItem key={index}>
        <Illustration imgUrl={value.imgUrl} illustrationHeight={stepsListWidth} />
        <Description>{value.description}</Description>
      </StepsItem>
    );
  });
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle}>
        <FlexContainer>
          <ColumnOne />
          <ColumnTwo />
          <ColumnThree />
          <ColumnFour />
        </FlexContainer>
      </HeroBlock>
      <StepsContainer>
        <StepsList ref={stepsListRef}>{steps}</StepsList>
      </StepsContainer>
      <TelephoneBlock>
        <Title>{data.telephoneBlock.title}</Title>
        <Telephone href={`tel: ${data.telephoneBlock.telephoneHref}`}>{data.telephoneBlock.telephone}</Telephone>
      </TelephoneBlock>
    </>
  );
};

export default PortfolioPage;
