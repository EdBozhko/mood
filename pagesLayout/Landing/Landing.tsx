import React, { FC, useState, useRef, useEffect } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { FlexContainer, ColumnOne, ColumnTwo, ColumnThree, ColumnFour, H1, StepsContainer, StepsList, StepsItem, Illustration, Description } from './Landing.styles';
import { TelephoneBlock, Title, Telephone } from 'pagesLayout/Contacts/Contacts.styles';

interface PortfolioPageProps {
  data: {
    h1: string;
    title: string;
    subtitle: string;
    telephoneBlock: {
      title: string;
      telephoneHref: string;
      telephone: string;
    };
    stepsList: [
      {
        imgUrl: string;
        description: string;
      },
    ];
    column_1_img: string;
    column_2_img: string;
    column_3_img: string;
    column_4_img: string;
  };
}

const PortfolioPage: FC<PortfolioPageProps> = ({ data }) => {
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
          <ColumnOne columnImg={data.column_1_img} />
          <ColumnTwo columnImg={data.column_2_img} />
          <ColumnThree columnImg={data.column_3_img} />
          <ColumnFour columnImg={data.column_4_img} />
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
