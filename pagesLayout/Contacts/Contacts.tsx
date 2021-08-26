import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import backgroundImg from './assets/static/contacts.jpg';

const data = {
  title: 'контакти',
  subtitle: 'давайте обговоримо Ваш дизайн',
  blackout: 0.1,
  backgroundImg: backgroundImg,
};

const ContactsPage: FC = () => {
  return <HeroBlock title={data.title} subtitle={data.subtitle} backgroundImg={data.backgroundImg} blackout={data.blackout} />;
};

export default ContactsPage;
