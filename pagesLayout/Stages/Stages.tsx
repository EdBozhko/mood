import React, { FC } from 'react';
import theme from '@themeConfigs/theme';
import HeroBlock from '@comp/HeroBlock';
// import backgroundImg from './assets/static/stages.jpg';
import Image from 'next/image';
import { StagesSection, StagesList, StagesItem, DescriptionContainer, ImageContainer, NumberBox, TitleBox, DescriptionBox, Separator, H1 } from './Stages.styles';
import Stage_1 from './assets/static/stage_1.png';
import Stage_2 from './assets/static/stage_2.jpg';
import Stage_3 from './assets/static/stage_3.png';
import Stage_4 from './assets/static/stage_4.jpg';
import Stage_5 from './assets/static/stage_5.png';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.jpg';

const data = {
  h1: 'Mood - кожен етап нашої співпраці ретельно зважений та продуманих, щоб реалізувати Ваші найсміливіші фантазії.',
  title: 'етапи роботи',
  subtitle: 'інтивідуальний підхід від концепції до реалізації',
  blackout: 0.45,
  // backgroundImg: backgroundImg,
  backgroundImg: '',
  stages: [
    {
      src: Stage_1,
      alt: 'етап - планування та розробка концепту',
      number: '01',
      title: 'планування та розробка концепту',
      description:
        'Заповнюємо технічне завдання, виходячи з ваших побажань, фіксуємо важливі складові майбутнього інтер’єру, всі ваші вподобання по кольорах, функціональним призначенням, меблюванню і оздоблювальним матеріалам.',
      textColor: theme.colors.brown,
      backgroundColor: theme.colors.beige,
    },
    {
      src: Stage_2,
      alt: 'етап - дизайн та розробка',
      number: '02',
      title: 'планування',
      description:
        'Виходячи з технічного завдання пропонуємо кілька варіантів планувань, обговорюємо плюси і мінуси кожного варіанту і погоджуємо той, що найбільше підходить вам. Вивчаємо планування у 2D реалізації.',
      textColor: theme.colors.grey,
      backgroundColor: theme.colors.orange,
    },
    {
      src: Stage_3,
      alt: 'етап - креслення та документація',
      number: '03',
      title: 'візуалізація',
      description: 'Розробляємо фотореалістичні зображення готового інтер’єру зі всіма меблями і опрацьованими деталями.',
      textColor: theme.colors.beige,
      backgroundColor: theme.colors.brown,
    },
    {
      src: Stage_4,
      alt: 'етап - координація і контроль',
      number: '04',
      title: 'креслення та документація',
      description: 'Презентуємо повний пакет документів, докладну інструкцію з переліком всього необхідного для реалізації об’єкта.',
      textColor: theme.colors.grey,
      backgroundColor: theme.colors.azure,
    },
    {
      src: Stage_5,
      alt: 'етап - фінальні штрихи',
      number: '05',
      title: 'реалізація проекту',
      description: 'Бригада будівельників, яку Ви оберете, здійснює всі будівельні та оздоблювальні роботи, суворо дотримуючись узгодженого проекту. Дизайнер забезпечує повну комплектацію об’єкта.',
      textColor: theme.colors.beige,
      backgroundColor: theme.colors.grey,
    },
  ],
  callToAction: {
    href: '/portfolio',
    blackout: 0.5,
    title: 'знайди своє натхнення',
    subtitle: 'перейти до портфоліо',
    src: CallToActionImg,
    alt: 'перейти до портфоліо',
  },
};

const StagesPage: FC = () => {
  const List = data.stages.map((item, index) => {
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
  });
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <StagesSection>
        <StagesList>{List}</StagesList>
      </StagesSection>
      <CallToAction data={data.callToAction} />
    </>
  );
};

export default StagesPage;
