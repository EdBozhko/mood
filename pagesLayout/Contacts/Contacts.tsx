import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/contacts.jpg';
import { H1, TelephoneBlock, Telephone, Title } from './Contacts.styles';

const data = {
  h1: 'Mood - наші дизайнери з готовністю дадуть відповіді на всі Ваші питання.',
  title: 'контакти',
  subtitle: 'давайте обговоримо Ваш дизайн',
  blackout: 0.1,
  // backgroundImg: backgroundImg,
  backgroundImg: '',
  telephoneBlock: {
    title: 'Зателефонуйте нам',
    telephoneHref: '+380972577591',
    telephone: '+38 097 257 75 91',
  },
};

const ContactsPage: FC = () => {
  return (
    <>
      <H1>{data.h1}</H1>
      <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />
      <TelephoneBlock>
        <Title>{data.telephoneBlock.title}</Title>
        <Telephone href={`tel: ${data.telephoneBlock.telephoneHref}`}>{data.telephoneBlock.telephone}</Telephone>
      </TelephoneBlock>
    </>
  );
};

export default ContactsPage;
