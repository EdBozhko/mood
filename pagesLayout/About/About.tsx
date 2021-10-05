import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { TextBlock, TextBlockContainer, H1, PhotoBlock, TeamBlock, TeamList, TeamItem } from './About.styles';
import CallToAction from '@comp/CallToAction';
import TeamMember from './components';

const AboutPage: FC = ({ data }) => {
  const { team, h1, title, subtitle, backgroundImg, blackout, photoBlock, textBlocks, callToAction } = data;
  const Team = team.map((member, index) => {
    return (
      <TeamItem key={index}>
        <TeamMember name={member.name} photoSrc={member.photoSrc} telephone={member.telephone} position={member.position} />
      </TeamItem>
    );
  });
  return (
    <>
      <H1>{h1}</H1>
      <HeroBlock title={title} subtitle={subtitle} backgroundImg={backgroundImg} blackout={blackout} />
      <TextBlockContainer>
        <TextBlock dangerouslySetInnerHTML={{ __html: textBlocks.block_1.text_1 }} />
      </TextBlockContainer>
      <PhotoBlock photo={photoBlock} />
      <TeamBlock>
        <TeamList>{Team}</TeamList>
      </TeamBlock>
      <CallToAction data={callToAction} />
    </>
  );
};
export default AboutPage;
