import { Outlet, useLocation } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';

import Layout from '../components/layout/index.jsx';
import MainMenu from '../components/menus/mainMenu/index.jsx';
import {
  StyledUnorderedList,
  StyledNavLink,
  HamburgerIcon,
  CloseIcon,
  StyledSpan,
  StyledHR,
} from './rootStyles.js';

import closeIcon from '../assets/shared/icon-close.svg';
import hamburgerIcon from '../assets/shared/icon-hamburger.svg';

export const Root = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const crewMember = encodeURI(data.crew[0].name);
  const destination = data.destinations[0].name.toLowerCase();
  const tech = encodeURI(data.technology[0].name);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => {
      return !prev;
    });
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 700) {
      setMenuIsOpen(false);
    }
  };

  const { pathname } = useLocation();

  return (
    <Layout className="root">
      <MainMenu open={menuIsOpen} handleClick={closeMenuOnMobile}>
        <StyledHR></StyledHR>
        <StyledUnorderedList $open={menuIsOpen}>
          <li>
            <StyledNavLink to="/" onClick={closeMenuOnMobile}>
              <StyledSpan $home>00</StyledSpan>Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/destination/${destination}`}
              onClick={closeMenuOnMobile}
              className={pathname.includes('destination') ? 'active' : ''}
            >
              <StyledSpan>01</StyledSpan>Destination
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/crew/${crewMember}`}
              onClick={closeMenuOnMobile}
              className={pathname.includes('crew') ? 'active' : ''}
            >
              <StyledSpan>02</StyledSpan>Crew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/technology/${tech}`}
              onClick={closeMenuOnMobile}
              className={pathname.includes('technology') ? 'active' : ''}
            >
              <StyledSpan>03</StyledSpan>Technology
            </StyledNavLink>
          </li>
        </StyledUnorderedList>
        {menuIsOpen ? (
          <CloseIcon src={closeIcon} onClick={toggleMenu}></CloseIcon>
        ) : (
          <HamburgerIcon
            src={hamburgerIcon}
            onClick={toggleMenu}
          ></HamburgerIcon>
        )}
      </MainMenu>
      <Outlet />
    </Layout>
  );
};
