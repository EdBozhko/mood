import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuStyled, Nav, MenuList, Socials, Phone, SVG } from './Menu.styles';
import MenuItem from './components/MenuItem';
import SocialButton from '@comp/SocialButton';

interface MenuProps {
  isMenuOpen: boolean;
  onClickHandler?: () => void;
}

interface MenuDataProps {
  menu: {
    telephoneHref: string;
    telephone: string;
    links: [
      {
        value: string;
        link: string;
      },
    ];
  };
}

const Menu: FC<MenuProps> = ({ isMenuOpen, onClickHandler }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: MenuDataProps) => state.menu);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'menu', types: 'MENU_INIT' });
  }, []);
  const { links, telephoneHref, telephone } = data;

  const [vh, setVh] = useState('');
  const handleResize = () => {
    setVh(`${window.innerHeight - 95}px`);
  };
  useEffect(() => {
    setVh(`${window.innerHeight - 95}px`);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MenuItemList = links.map((item, index) => {
    return <MenuItem href={item.link} key={index} children={item.value} isMenuOpen={isMenuOpen} transitionDelay={`0.${index + 1}s`} onClickHandler={onClickHandler} />;
  });
  return (
    <>
      <MenuStyled isMenuOpen={isMenuOpen} vh={vh}>
        <Phone href={`tel: ${telephoneHref}`} isMenuOpen={isMenuOpen}>
          {telephone}
        </Phone>
        <Nav>
          <MenuList>{MenuItemList}</MenuList>
        </Nav>
        <Socials isMenuOpen={isMenuOpen}>
          <SocialButton href="https://www.instagram.com/mood_design_company/">
            <SVG viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" />
              <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0" />
              <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
            </SVG>
          </SocialButton>
          <SocialButton href="https://www.facebook.com/MOOD-%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%8F-%D1%81%D1%83%D1%87%D0%B0%D1%81%D0%BD%D0%BE%D1%97-%D0%B0%D1%80%D1%85%D1%96%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B8-%D1%82%D0%B0-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D1%83-110108781433520/">
            <SVG viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m75 512h167v-182h-60v-60h60v-75c0-41.355469 33.644531-75 75-75h75v60h-60c-16.542969 0-30 13.457031-30 30v60h87.292969l-10 60h-77.292969v182h135c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-105v-122h72.707031l20-120h-92.707031v-30h90v-120h-105c-57.898438 0-105 47.101562-105 105v45h-60v120h60v122h-137c-24.8125 0-45-20.1875-45-45zm0 0" />
            </SVG>
          </SocialButton>
          <SocialButton href="#">
            <SVG viewBox="0 -61 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m75 390h362c41.355469 0 75-33.644531 75-75v-240c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v240c0 41.355469 33.644531 75 75 75zm-45-315c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v240c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" />
              <path d="m181 94.507812v203.898438l180.5-103.621094zm30 50.984376 89.5 49.722656-89.5 51.378906zm0 0" />
            </SVG>
          </SocialButton>
          <SocialButton href="viber://chat/?number=%2B380972577591">
            <SVG id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
              <path d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" />
              <path d="m12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z" />
              <path d="m16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z" />
              <path d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" />
              <path d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z" />
            </SVG>
          </SocialButton>
        </Socials>
      </MenuStyled>
    </>
  );
};

export default Menu;
