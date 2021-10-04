import React, { FC, useState, useRef, useEffect } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { FlexContainer, ColumnOne, ColumnTwo, ColumnThree, ColumnFour, H1, StepsContainer, StepsList, StepsItem, Illustration, Description } from './Landing.styles';
import { TelephoneBlock, Title, Telephone } from 'pagesLayout/Contacts/Contacts.styles';

const PortfolioPage: FC = ({ data }) => {
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
