import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import Image from 'next/image';
import { StagesSection, StagesList, StagesItem, DescriptionContainer, ImageContainer, NumberBox, TitleBox, DescriptionBox, Separator, H1 } from './Stages.styles';
import CallToAction from '@comp/CallToAction';

interface StagesPageProps {
  data: {
    h1: string;
    title: string;
    subtitle: string;
    blackout: number;
    backgroundImg: string;
    stages: [
      {
        src: string;
        alt: string;
        number: string;
        title: string;
        description: string;
        textColor: string;
        backgroundColor: string;
      },
    ];
    callToAction: {
      href: string;
      blackout: number;
      title: string;
      subtitle: string;
      src: string;
      alt: string;
    };
  };
}

const StagesPage: FC<StagesPageProps> = ({ data }) => {
  const { h1, title, subtitle, backgroundImg, blackout, stages, callToAction } = data;

  return (
    <>
      <H1>{h1}</H1>
      <HeroBlock title={title} subtitle={subtitle} backgroundImg={backgroundImg} blackout={blackout} />
      <StagesSection>
        <StagesList>
          {stages.length > 0
            ? stages.map((item, index) => {
                return (
                  <StagesItem key={index}>
                    <ImageContainer>
                      <Image objectFit="cover" objectPosition="center" layout="fill" src={item.src} alt={item.alt} />
                    </ImageContainer>
                    <DescriptionContainer textColor={item.textColor} backgroundColor={item.backgroundColor}>
                      <NumberBox>{item.number}</NumberBox>
                      <Separator textColor={item.textColor} />
                      <TitleBox>{item.title}</TitleBox>
                      <DescriptionBox>{item.description}</DescriptionBox>
                    </DescriptionContainer>
                  </StagesItem>
                );
              })
            : null}
        </StagesList>
      </StagesSection>
      <CallToAction data={callToAction} />
    </>
  );
};

export default StagesPage;
