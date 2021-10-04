import React, { FC, useEffect } from 'react';
import ContactsPage from 'pagesLayout/Contacts';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const Contacts: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'contacts_page', types: 'CONTACTS_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.seo.title} metaDescriptionContent={data.seo.metaDescriptionContent} />
      <ContactsPage data={data.page} />
    </>
  );
};

export default Contacts;
