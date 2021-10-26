import React, { FC, useEffect } from 'react';
import ContactsPage from 'pagesLayout/Contacts';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface ContactsDataProps {
  contacts: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
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
  };
}

const Contacts: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: ContactsDataProps) => state.contacts);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'contacts_page', types: 'CONTACTS_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <ContactsPage data={page} />
    </>
  );
};

export default Contacts;
