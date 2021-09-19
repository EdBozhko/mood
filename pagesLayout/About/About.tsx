import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/about.png';
import { TextBlock, TextBlockContainer, H1, PhotoBlock, TeamBlock, TeamList, TeamItem } from './About.styles';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.jpg';
import Team from './assets/static/team.jpg';
import TeamMember from './components';
import TeamMember_1 from './assets/static/team_member_1.jpg';
import TeamMember_2 from './assets/static/team_member_2.jpg';
import TeamMember_3 from './assets/static/team_member_3.jpg';
import TeamMember_4 from './assets/static/team_member_4.jpg';
import TeamMember_5 from './assets/static/team_member_5.jpg';
import TeamMember_6 from './assets/static/team_member_6.jpg';
import TeamMember_7 from './assets/static/team_member_7.jpg';

const data = {
  h1: 'Mood - наш дизайн створить Ваш настрій.',
  title: 'про нас',
  subtitle: 'розробляємо дизайн, який створює настрій',
  backgroundImg: backgroundImg,
  blackout: 0.18,
  callToAction: {
    href: '/portfolio',
    blackout: 0.5,
    title: 'знайди своє натхнення',
    subtitle: 'перейти до портфоліо',
    src: CallToActionImg,
    alt: 'перейти до портфоліо',
  },
  textBlocks: {
    block_1: {
      text_1:
        'Mood design studio - це сучасна архітектурно-дизайнерска студія з комплексним підходом націлені на результат.<br/><br/>З 2007 року почалась наша історія.<br/><br/>Ми професійно почали займатись покрівельними матеріалами та віконними конструкціями і виросли у цій справі, стали успішними.<br/><br/>Під час роботи ми постійно співпрацювали з дизайнерами, архітекторами та прорабами у різних напрямках.<br/><br/>Дуже багато було сумісної співпраці з ними і реалізовані велики цікаві проекти.<br/><br/>З часом в нашій команді з’явились високо кваліфіковані інжинери, проектувальники і ми самостійно почали розробляти свої власні проекти та успішно їх реалізовувати.<br/><br/>Пройшов час, ми виросли. Штат нашої команди збільшився в три рази і ми прийняли рішення розділити наші напрямки, відкрити ще один офіс де повноцінно і професійно зможемо надавати послуги архітектури та дизайну.<br/><br/> 14 років досвіду, дає нам можливість бачити потребу клієнта в цілому, реалізовувати її якісно, наперед враховуючи всі нюанси при проектуванні.<br/><br/>Наша задача - зберегти та примножити здобуті знання та досвід, перетворюючи його на користь для суспільства.<br/><br/>Наша місія - зробити максимально якісну послугу, в якій наші клієнти отримають комплексне рішення, де кожна деталь буде приносити естетичне задоволення, радість та душевний спокій.<br/><br/>В наших проектах ви отримаєте інновації та найсучасніший стиль, який буде індивідуальним та неповторним  для кожного.',
    },
  },
  photoBlock: Team,
  // team: [
  //   { name: 'Дьопйош Юрій', photoSrc: TeamMember_1, telephone: '+380972577591', position: 'засновник компанії' },
  //   { name: 'Зеленюк Ірина', photoSrc: TeamMember_2, telephone: '+380500502960', position: 'арт-директор, дизайнер інтер’єрів' },
  //   { name: 'Дьопйош Світлана', photoSrc: TeamMember_3, telephone: '+380668585707', position: 'ландшафтний дизайнер' },
  //   { name: 'Бистряник Василь', photoSrc: TeamMember_4, telephone: '+380501111111', position: 'інженер, точні розрахунки та кошторис матеріалів' },
  //   { name: 'Стегура Віктор', photoSrc: TeamMember_5, telephone: '+380501111111', position: 'менеджер-консультант по всім видам покрівельних матеріалів' },
  //   { name: 'Качур Василь', photoSrc: TeamMember_6, telephone: '+380501111111', position: 'інженер-геодезист' },
  //   { name: 'Шелепець Андрій', photoSrc: TeamMember_7, telephone: '+380501111111', position: 'менеджер-консультант підьємно-розсувних систем, панорамних вікон, маркізам' },
  // ],
  team: [
    { name: 'Дьопйош Юрій', photoSrc: TeamMember_1, telephone: '', position: 'засновник компанії' },
    { name: 'Зеленюк Ірина', photoSrc: TeamMember_2, telephone: '', position: 'арт-директор, дизайнер інтер’єрів' },
    { name: 'Дьопйош Світлана', photoSrc: TeamMember_3, telephone: '', position: 'ландшафтний дизайнер' },
    { name: 'Бистряник Василь', photoSrc: TeamMember_4, telephone: '', position: 'інженер, точні розрахунки та кошторис матеріалів' },
    { name: 'Стегура Віктор', photoSrc: TeamMember_5, telephone: '', position: 'менеджер-консультант по всім видам покрівельних матеріалів' },
    { name: 'Качур Василь', photoSrc: TeamMember_6, telephone: '', position: 'інженер-геодезист' },
    { name: 'Шелепець Андрій', photoSrc: TeamMember_7, telephone: '', position: 'менеджер-консультант підьємно-розсувних систем, панорамних вікон, маркізам' },
  ],
};

const AboutPage: FC = () => {
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
