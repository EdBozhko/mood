import React, { FC } from 'react';
import ContactsPage from 'pagesLayout/Contacts';
import Seo from '@comp/Seo';

const data = {
  title: 'Контакти | mood-design.com.ua',
  metaDescriptionContent: 'Наші спеціалісти з готовністю дадуть відповіді на всі Ваші запитання.',
};

const Contacts: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <ContactsPage />
    </>
  );
};

export default Contacts;
