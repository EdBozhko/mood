import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/contacts.jpg';
import { TeamBlock, TeamList, TeamItem, H1 } from './Contacts.styles';
import TeamMember from './components';
import TeamMember_1 from './assets/static/team_member_1.jpg';
import TeamMember_2 from './assets/static/team_member_2.jpg';
import TeamMember_3 from './assets/static/team_member_3.jpg';
import TeamMember_4 from './assets/static/team_member_4.jpg';
import TeamMember_5 from './assets/static/team_member_5.jpg';
import TeamMember_6 from './assets/static/team_member_6.jpg';
import TeamMember_7 from './assets/static/team_member_7.jpg';

const data = {
  h1: 'Mood - наші дизайнери з готовністю дадуть відповіді на всі Ваші питання.',
  title: 'контакти',
  subtitle: 'давайте обговоримо Ваш дизайн',
  blackout: 0.1,
  backgroundImg: backgroundImg,
  team: [
    { name: 'Дьопйош Юрій', photoSrc: TeamMember_1, telephone: '+380972577591', position: 'засновник компанії' },
    { name: 'Зеленюк Ірина', photoSrc: TeamMember_2, telephone: '+380500502960', position: 'арт-директор, дизайнер інтер’єрів' },
    { name: 'Дьопйош Світлана', photoSrc: TeamMember_3, telephone: '+380668585707', position: 'ландшафтний дизайнер' },
    { name: 'Бистряник Василь', photoSrc: TeamMember_4, telephone: '+380501111111', position: 'інженер, точні розрахунки та кошторис матеріалів' },
    { name: 'Стегура Віктор', photoSrc: TeamMember_5, telephone: '+380501111111', position: 'менеджер-консультант по всім видам покрівельних матеріалів' },
    { name: 'Качур Василь', photoSrc: TeamMember_6, telephone: '+380501111111', position: 'інженер-геодезист' },
    { name: 'Шелепець Андрій', photoSrc: TeamMember_7, telephone: '+380501111111', position: 'менеджер-консультант підьємно-розсувних систем, панорамних вікон, маркізам' },
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
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TeamBlock>
        <TeamList>{Team}</TeamList>
      </TeamBlock>
    </>
  );
};

export default ContactsPage;
