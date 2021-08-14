import React, { FC } from 'react';
import { FooterStyled, MapBox } from './Footer.styles';
import ContactForm from './components/ContactForm';

interface FooterProps {
  title?: string;
  subtitle?: string;
}

const Footer: FC<FooterProps> = ({ title, subtitle }) => {
  return (
    <>
      <FooterStyled>
        <ContactForm title={title} subtitle={subtitle} />
        <MapBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.749498237077!2d22.297502019290487!3d48.61943257316012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b1d2aa602d%3A0x945a39a0cccdbfc5!2z0L_Qu9C-0YnQsCDQqNCw0L3QtNC-0YDQsCDQn9C10YLQtdGE0ZYsIDIzLCDQo9C20LPQvtGA0L7QtCwg0JfQsNC60LDRgNC_0LDRgtGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4ODAwMA!5e0!3m2!1sru!2sua!4v1628961791977!5m2!1sru!2sua"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </MapBox>
      </FooterStyled>
    </>
  );
};

export default Footer;
