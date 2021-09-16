import React, { FC, useRef, useEffect, useState } from 'react';
import { Form, Name, Phone, Submit, InputBox, Title, Subtitle, Heading, InputContainer } from './ContactForm.styles';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm: FC<ContactFormProps> = ({ title, subtitle }) => {
  const inputBoxRef = useRef(null);
  const [inputBox, setInput] = useState({
    width: 0,
    height: 0,
  });
  const handleResize = () => {
    setInput({
      width: inputBoxRef.current.clientWidth,
      height: inputBoxRef.current.clientHeight,
    });
  };
  useEffect(() => {
    setInput({
      width: inputBoxRef.current.clientWidth,
      height: inputBoxRef.current.clientHeight,
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const inputPerimeter = (inputBox.height * 2 + inputBox.width * 2) * 1.01;
  return (
    <Form>
      <Heading>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <InputContainer>
        <InputBox ref={inputBoxRef} inputPerimeter={inputPerimeter}>
          <Name type="text" placeholder="Ваше ім’я" required></Name>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%"></rect>
          </svg>
        </InputBox>
        <InputBox inputPerimeter={inputPerimeter}>
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
