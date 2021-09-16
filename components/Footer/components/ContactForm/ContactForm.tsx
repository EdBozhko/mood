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

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log('Sending');

    let data = {
      name,
      phone,
    };

    fetch('./api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setPhone('');
      }
      setDisabled(false);
    });
  };
  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Heading>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <InputContainer style={disabled ? { opacity: '0.3' } : null}>
        <InputBox ref={inputBoxRef} inputPerimeter={inputPerimeter}>
          <Name
            value={name}
            type="text"
            placeholder="Ваше ім’я"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></Name>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%"></rect>
          </svg>
        </InputBox>
        <InputBox inputPerimeter={inputPerimeter}>
          <Phone
            value={phone}
            type="tel"
            placeholder="+38 (___) ___-__-__"
            mask="+38 (999) 999-99-99"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          ></Phone>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%"></rect>
          </svg>
        </InputBox>
        <Submit disabled={disabled} type="submit">
          Замовити
        </Submit>
      </InputContainer>
    </Form>
  );
};
export default ContactForm;
