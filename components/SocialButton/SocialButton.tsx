import React, { FC, ReactNode } from 'react';
import { Social } from './SocialButton.styles';

interface SocialButtonProps {
  children?: ReactNode;
  href: string;
}

export const SocialButton: FC<SocialButtonProps> = ({ children, href }) => {
  return (
    <>
      <Social href={href}>{children}</Social>
    </>
  );
};

export default SocialButton;
