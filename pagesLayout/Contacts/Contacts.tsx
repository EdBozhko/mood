import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { H1, TelephoneBlock, Telephone, Title } from './Contacts.styles';

const ContactsPage: FC = ({ data }) => {
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
