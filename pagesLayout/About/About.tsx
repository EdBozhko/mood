import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { TextBlock, TextBlockContainer, H1, PhotoBlock, TeamBlock, TeamList, TeamItem } from './About.styles';
import CallToAction from '@comp/CallToAction';
import TeamMember from './components';

const AboutPage: FC = ({ data }) => {
  const Team = data.team.map((member, index) => {
    return (
      <TeamItem key={index}>
        <TeamMember name={member.name} photoSrc={member.photoSrc} telephone={member.telephone} position={member.position} />
      </TeamItem>
    );
  });
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TextBlockContainer>
        <TextBlock dangerouslySetInnerHTML={{ __html: data.textBlocks.block_1.text_1 }} />
      </TextBlockContainer>
      <PhotoBlock photo={data.photoBlock} />
      <TeamBlock>
        <TeamList>{Team}</TeamList>
      </TeamBlock>
      <CallToAction data={data.callToAction} />
    </>
  );
};
export default AboutPage;
