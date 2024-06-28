import { Outlet } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';

import Layout from '../components/layout/index.jsx';
import MainMenu from '../components/menus/mainMenu/index.jsx';
import {
  UnorderedList,
  StyledNavLink,
  HamburgerIcon,
  CloseIcon,
  StyledSpan,
} from './rootStyles.js';

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
      console.log('closing menu');
      setMenuIsOpen(false);
    }
  };

  return (
    <Layout className="root">
      <MainMenu open={menuIsOpen} handleClick={closeMenuOnMobile}>
        <UnorderedList $open={menuIsOpen}>
          <li>
            <StyledNavLink to="/" onClick={closeMenuOnMobile}>
              <StyledSpan $home>00</StyledSpan>Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/destination/${destination}`}
              onClick={closeMenuOnMobile}
            >
              <StyledSpan>01</StyledSpan>Destination
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/crew/${crewMember}`}
              onClick={closeMenuOnMobile}
            >
              <StyledSpan>02</StyledSpan>Crew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/technology/${tech}`}
              onClick={closeMenuOnMobile}
            >
              <StyledSpan>03</StyledSpan>Technology
            </StyledNavLink>
          </li>
        </UnorderedList>
        {menuIsOpen ? (
          <CloseIcon
            src="../assets/shared/icon-close.svg"
            onClick={toggleMenu}
          ></CloseIcon>
        ) : (
          <HamburgerIcon
            src="../assets/shared/icon-hamburger.svg"
            onClick={toggleMenu}
          ></HamburgerIcon>
        )}
      </MainMenu>
      <Outlet />
    </Layout>
  );
};
