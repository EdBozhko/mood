import React, { Children, FC } from 'react';
import Link from 'next/link';
import { Item, ListItem } from './MenuItem.styles';

interface MenuItemProps {
  href: string;
  isMenuOpen: boolean;
  children: string;
}

const MenuItem: FC<MenuItemProps> = ({ href, children, isMenuOpen }) => {
  return (
    <ListItem>
      <Link href={href} prefetch={false} passHref>
        <Item isMenuOpen={isMenuOpen}>{children}</Item>
      </Link>
    </ListItem>
  );
};

export default MenuItem;
