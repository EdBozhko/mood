import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import Image from 'next/image';
import { StagesSection, StagesList, StagesItem, DescriptionContainer, ImageContainer, NumberBox, TitleBox, DescriptionBox, Separator, H1 } from './Stages.styles';
import CallToAction from '@comp/CallToAction';

const StagesPage: FC = ({ data }) => {
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <StagesSection>
        <StagesList>
          {data.stages.length > 0
            ? data.stages.map((item, index) => {
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
      <CallToAction data={data.callToAction} />
    </>
  );
};

export default StagesPage;
