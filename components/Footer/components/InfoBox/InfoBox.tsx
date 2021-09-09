import React, { FC } from 'react';
import { InfoContainer, Address, WorkingHours, Title, Subtitle } from './InfoBox.styles';

interface InfoBoxProps {
  address?: string;
  addressHref?: string;
  workingHours?: any;
}

const InfoBox: FC<InfoBoxProps> = ({ address, addressHref, workingHours }) => {
  return (
    <InfoContainer>
      <Address href={addressHref} target="_blank">
        <Title>Адреса:</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: address }}></Subtitle>
      </Address>
      <WorkingHours>
        <Title>Графік роботи:</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: workingHours }}></Subtitle>
      </WorkingHours>
    </InfoContainer>
  );
};
export default InfoBox;
