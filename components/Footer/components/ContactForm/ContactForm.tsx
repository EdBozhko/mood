import React, { FC } from 'react';
import { Form, Name, Phone, Submit, InputBox, Title, Subtitle, Heading } from './ContactForm.styles';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm: FC<ContactFormProps> = ({ title, subtitle }) => {
  return (
    <Form>
      <Heading>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <InputBox>
        <Name type="text" placeholder={`Ваше ім'я`}></Name>
        <Phone type="tel" placeholder="________"></Phone>
        <Submit>Замовити</Submit>
      </InputBox>
    </Form>
  );
};
export default ContactForm;
