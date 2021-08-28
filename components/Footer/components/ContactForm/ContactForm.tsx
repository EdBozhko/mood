import React, { FC } from 'react';
import { Form, Name, Phone, Submit, InputBox, Title, Subtitle, Heading, InputContainer } from './ContactForm.styles';
import InputMask from 'react-input-mask';

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
      <InputContainer>
        <InputBox>
          <Name type="text" placeholder="Ваше ім’я" required></Name>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%"></rect>
          </svg>
        </InputBox>
        <InputBox>
          <Phone type="tel" placeholder="+38 (___) ___-__-__" mask="+38 (999) 999-99-99" required></Phone>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%"></rect>
          </svg>
        </InputBox>
        <Submit>Замовити</Submit>
      </InputContainer>
    </Form>
  );
};
export default ContactForm;
