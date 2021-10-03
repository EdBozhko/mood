import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToActionSection, CallToActionContainer, TitleContainer, Title, Subtitle } from './CallToAction.styles';

interface CallToActionProps {
  data: {
    href: string;
    blackout: number;
    title: string;
    subtitle: string;
    src: string;
    alt: string;
  };
}

const CallToAction: FC<CallToActionProps> = ({ data }) => {
  return (
    <CallToActionSection>
      <Link href={data.href}>
        <CallToActionContainer blackout={data.blackout}>
          <TitleContainer>
            <Title>{data.title}</Title>
            <Subtitle>{data.subtitle}</Subtitle>
          </TitleContainer>
          {data.src.length > 0 ? <Image objectFit="cover" objectPosition="center" layout="fill" src={data.src} alt={data.alt} /> : null}
        </CallToActionContainer>
      </Link>
    </CallToActionSection>
  );
};
export default CallToAction;
