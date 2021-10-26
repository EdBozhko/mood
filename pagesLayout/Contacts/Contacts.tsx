import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { H1, TelephoneBlock, Telephone, Title } from './Contacts.styles';

interface ContactsPageProps {
  data: {
    h1: string;
    title: string;
    subtitle: string;
    blackout: number;
    backgroundImg: string;
    telephoneBlock: {
      title: string;
      telephoneHref: string;
      telephone: string;
    };
  };
}

const ContactsPage: FC<ContactsPageProps> = ({ data }) => {
  const { h1, title, subtitle, backgroundImg, blackout, telephoneBlock } = data;
  return (
    <>
      <H1>{h1}</H1>
      <HeroBlock title={title} subtitle={subtitle} backgroundImg={backgroundImg} blackout={blackout} />
      <TelephoneBlock>
        <Title>{telephoneBlock.title}</Title>
        <Telephone href={`tel: ${telephoneBlock.telephoneHref}`}>{telephoneBlock.telephone}</Telephone>
      </TelephoneBlock>
    </>
  );
};

export default ContactsPage;
