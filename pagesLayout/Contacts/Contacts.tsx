import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/contacts.jpg';
import { TeamBlock, TeamList, TeamItem } from './Contacts.styles';
import TeamMember from './components';
import TeamMember_1 from './assets/static/manager.jpg';
import TeamMember_2 from './assets/static/manager2.jpeg';
import TeamMember_3 from './assets/static/manager3.jpeg';

const data = {
  title: 'контакти',
  subtitle: 'давайте обговоримо Ваш дизайн',
  blackout: 0.1,
  backgroundImg: backgroundImg,
  team: [
    { name: 'John Doe', photoSrc: TeamMember_1, telephone: '+380501111111', position: 'manager' },
    { name: 'John Doe', photoSrc: TeamMember_2, telephone: '+380501111111', position: 'manager' },
    { name: 'John Doe', photoSrc: TeamMember_3, telephone: '+380501111111', position: 'manager' },
  ],
};

const ContactsPage: FC = () => {
  const Team = data.team.map((member, index) => {
    return (
      <TeamItem key={index}>
        <TeamMember name={member.name} photoSrc={member.photoSrc} telephone={member.telephone} position={member.position} />
      </TeamItem>
    );
  });
  return (
    <>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TeamBlock>
        <TeamList>{Team}</TeamList>
      </TeamBlock>
    </>
  );
};

export default ContactsPage;
