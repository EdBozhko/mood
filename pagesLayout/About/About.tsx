import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import theme from '@themeConfigs/theme';
import backgroundImg from './assets/static/about.png';
import { TextBlock, TextBlockContainer, H1 } from './About.styles';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.jpg';
import Image from 'next/image';
import Block_1 from './assets/static/block_1.png';
import Block_2 from './assets/static/block_2.jpg';

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
        'Компанія MOOD design створює інтер’єри, які викликають емоції, їх хочеться розглядати, відчувати і насолоджуватися комфортом.<br/>Зібравши в свою команду фахівців з різних областей, ми втілюємо у реальність мрії про розкішне і комфортного життя.<br/>Ми даруємо нову якість життя, продумуэмо кожну деталь, піклуючись про те, щоб забезпечити нашим клієнтам відчуття ексклюзивності на довгі роки. Від початку роботи над дизайн-проектом і до його завершення, ми продумуємо кожен етап створення сучасного, розкішного способу життя, гарантуючи терміни і високий рівень якості.<br/>Дотримання принципів «інтер’єр - як мистецтво» і творчого підходу.<br/>Ми стежимо за світовими трендами, черпаємо натхнення зі світу моди і дизайну та впроваджуємо в наші проекти.<br/>Наш успіх визначає наше бачення сучасного інтер’єру, розуміння клієнта і поставлених завдань, якість послуг і відповідальний творчий підхід до роботи нашої команди.',
    },
  },
};

const AboutPage: FC = () => {
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TextBlockContainer>
        {/* <TextBlock>{data.textBlocks.block_1.text_1}</TextBlock> */}
        <TextBlock dangerouslySetInnerHTML={{ __html: data.textBlocks.block_1.text_1 }}>{}</TextBlock>
      </TextBlockContainer>
      <CallToAction data={data.callToAction} />
    </>
  );
};
export default AboutPage;
