import React, { FC } from 'react';
import theme from '@themeConfigs/theme';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/stages.jpg';
import Image from 'next/image';
import { StagesSection, StagesList, StagesItem, DescriptionContainer, ImageContainer, NumberBox, TitleBox, DescriptionBox, Separator, H1 } from './Stages.styles';
import Stage_1 from './assets/static/stage_1.png';
import Stage_2 from './assets/static/stage_2.jpg';
import Stage_3 from './assets/static/stage_3.jpeg';
import Stage_4 from './assets/static/stage_4.png';
import Stage_5 from './assets/static/stage_5.png';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.png';

const data = {
  h1: 'Mood - кожен етап нашої співпраці ретельно зважений та продуманих, щоб реалізувати Ваші найсміливіші фантазії.',
  title: 'етапи роботи',
  subtitle: 'інтивідуальний підхід від концепції до реалізації',
  blackout: 0.45,
  backgroundImg: backgroundImg,
  stages: [
    {
      src: Stage_1,
      alt: 'етап - планування та розробка концепту',
      number: '01',
      title: 'планування та розробка концепту',
      description:
        'Окунись в облака. Этот этап посвящен пониманию ваших желаний и потребностей в пространстве. Как правило, это занимает от 2 до 3 занятий, чтобы перейти к стадии, которая устраивает всех и имеет ясный дизайн. Это будет начало структуры, которая создаст конечный результат, поэтому мы серьезно относимся к этому этапу. Мы займемся той же страницей относительно бюджета и параметров дизайна, а затем начнем собирать изображения, чтобы дать представление о замысле дизайна. Короче говоря, мы сделаем все возможное, чтобы убедиться, что мы точно понимаем намерения клиентов в отношении своего дома. Здесь начинается мечта.',
      textColor: theme.colors.brown,
      backgroundColor: theme.colors.beige,
    },
    {
      src: Stage_2,
      alt: 'етап - дизайн та розробка',
      number: '02',
      title: 'дизайн та розробка',
      description:
        'Это когда глина начинает принимать форму. На этом этапе мы начинаем вытягивать и планировать актуальные материалы и представлять их заказчику. На этом этапе проверяются планировки комнат и мебели, шкафы, бытовая техника и сантехника, чтобы убедиться, что они соответствуют вашим функциональным потребностям. Потому что хороший дизайн - это функциональный дизайн.',
      textColor: theme.colors.grey,
      backgroundColor: theme.colors.orange,
    },
    {
      src: Stage_3,
      alt: 'етап - креслення та документація',
      number: '03',
      title: 'креслення та документація',
      description:
        'Теперь части становятся на свои места. На этом этапе идеи одобрены и оценены, и мы начинаем с чертежей. Области, которые мы определили с материалами, будут выделены для целей проекта и утверждения, и мы будем использовать чертежи архитектора для создания необходимых планов. Каждый чертеж будет проходить процесс утверждения с клиентом, чтобы учесть изменения и исправления. Все одобренные материалы (камни, дерево, плитка, техника, сантехника и т. Д.) Будут указаны и переданы вашему строителю для оценки.',
      textColor: theme.colors.beige,
      backgroundColor: theme.colors.brown,
    },
    {
      src: Stage_4,
      alt: 'етап - координація і контроль',
      number: '04',
      title: 'координація і контроль',
      description:
        'Документы подаются, и дело идет. Мы хотим, чтобы этот процесс был для вас беззаботным и увлекательным, поэтому мы внимательно следим за всем от начала до конца. Мы будем доступны для встреч, координируем ежемесячные отчеты о статусе и отслеживаем каждый заказ, чтобы вы никогда не оставались в неведении.',
      textColor: theme.colors.grey,
      backgroundColor: theme.colors.azure,
    },
    {
      src: Stage_5,
      alt: 'етап - фінальні штрихи',
      number: '05',
      title: 'фінальні штрихи',
      description:
        'Теперь части становятся на свои места. На этом этапе идеи одобрены и оценены, и мы начинаем с чертежей. Области, которые мы определили с материалами, будут выделены для целей проекта и утверждения, и мы будем использовать чертежи архитектора для создания необходимых планов. Каждый чертеж будет проходить процесс утверждения с клиентом, чтобы учесть изменения и исправления. Все одобренные материалы (камни, дерево, плитка, техника, сантехника и т. Д.) Будут указаны и переданы вашему строителю для оценки.',
      textColor: theme.colors.beige,
      backgroundColor: theme.colors.grey,
    },
  ],
  callToAction: {
    href: '/portfolio',
    blackout: 0.1,
    title: 'знайди своє натхнення',
    subtitle: 'перейти до портфоліо',
    src: CallToActionImg,
    alt: 'перейти до портфоліо',
  },
};

const StagesPage: FC = () => {
  const List = data.stages.map((item, index) => {
    return (
      <StagesItem>
        <ImageContainer>
          <Image objectFit="cover" objectPosition="center" layout="fill" key={index} src={item.src} alt={item.alt} />
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
