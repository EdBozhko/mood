import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/about.png';
import { TextBlock, TextBlockContainer, H1 } from './About.styles';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.jpg';

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
};

const AboutPage: FC = () => {
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TextBlockContainer>
        <TextBlock dangerouslySetInnerHTML={{ __html: data.textBlocks.block_1.text_1 }} />
      </TextBlockContainer>
      <CallToAction data={data.callToAction} />
    </>
  );
};
export default AboutPage;
