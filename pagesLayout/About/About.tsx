import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import theme from '@themeConfigs/theme';
import backgroundImg from './assets/static/about.png';
import { TextBlock, TextBlockContainer } from './About.styles';
import CallToAction from '@comp/CallToAction';
import CallToActionImg from './assets/static/callToAction.png';
import Image from 'next/image';
import Block_1 from './assets/static/block_1.png';
import Block_2 from './assets/static/block_2.jpg';

const data = {
  title: 'про нас',
  subtitle: 'розробляємо дизайн, який створює настрій',
  backgroundImg: backgroundImg,
  blackout: 0.18,
  callToAction: {
    href: '/portfolio',
    blackout: 0.05,
    title: 'знайди своє натхнення',
    subtitle: 'перейти до портфоліо',
    src: CallToActionImg,
    alt: 'перейти до портфоліо',
  },
  textBlocks: {
    block_1: {
      src: Block_1,
      blackout: 0.3,
      text_1: 'ваш будинок має бути відображенням вас самого, але не тільки зовнішньо гарно, а і функціонально',
      textColor_1: theme.colors.orange,
      blockAlign_1: 'right',
    },
    block_2: {
      src: Block_2,
      blackout: 0.45,
      text_1:
        'життя буває вдома. це місце затишку, місце збору вашої родини та місце для натхнення. у вашому домі повинно відображатися, ким ви є, не тільки красиво, але й красиво функціонально. так ви зможете прожити своє найкраще життя.',
      textColor_1: theme.colors.beige,
      blockAlign_1: 'left',
      text_2:
        'основою нашої компанії є особистий підхід до створення вашого ідеального простору. спільно з вами та нашою спільнотою майстрів та дизайнерів ми створюємо унікальний будинок для вас та вашої родини.',
      textColor_2: theme.colors.orange,
      blockAlign_2: 'right',
    },
  },
};

const AboutPage: FC = () => {
  return (
    <>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TextBlockContainer backgroundImg={data.textBlocks.block_1.src} blackout={data.textBlocks.block_1.blackout}>
        <TextBlock blockAlign={data.textBlocks.block_1.blockAlign_1} textColor={data.textBlocks.block_1.textColor_1}>
          {data.textBlocks.block_1.text_1}
        </TextBlock>
      </TextBlockContainer>
      <TextBlockContainer backgroundImg={data.textBlocks.block_2.src} blackout={data.textBlocks.block_2.blackout}>
        <TextBlock blockAlign={data.textBlocks.block_2.blockAlign_1} textColor={data.textBlocks.block_2.textColor_1}>
          {data.textBlocks.block_2.text_1}
        </TextBlock>
        <TextBlock blockAlign={data.textBlocks.block_2.blockAlign_2} textColor={data.textBlocks.block_2.textColor_2}>
          {data.textBlocks.block_2.text_2}
        </TextBlock>
      </TextBlockContainer>
      <CallToAction data={data.callToAction} />
    </>
  );
};
export default AboutPage;
