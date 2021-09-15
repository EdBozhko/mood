import React, { FC, useEffect, useRef } from 'react';
import { FooterStyled } from './Footer.styles';
import ContactForm from './components/ContactForm';

interface FooterProps {
  page?: boolean;
  title?: string;
  subtitle?: string;
}

const Footer: FC<FooterProps> = ({ title, subtitle }) => {
  return (
    <>
      <FooterStyled>
        <ContactForm title={title} subtitle={subtitle} />
      </FooterStyled>
    </>
  );
};

export default Footer;
