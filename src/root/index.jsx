import { Outlet, useLocation } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';

import Layout from '../components/layout/index.jsx';
import MainMenu from '../components/menus/mainMenu/index.jsx';
import {
  UnorderedList,
  StyledNavLink,
  HamburgerIcon,
  CloseIcon,
} from './rootStyles.js';
import { useParams } from 'react-router-dom';

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
      <MainMenu open={menuIsOpen}>
        <UnorderedList $open={menuIsOpen}>
          <li>
            <StyledNavLink to="/" onClick={closeMenuOnMobile}>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/destination/${destination}`}
              onClick={closeMenuOnMobile}
            >
              <span>01</span>Destination
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/crew/${crewMember}`}
              onClick={closeMenuOnMobile}
            >
              <span>02</span>Crew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/technology/${tech}`}
              onClick={closeMenuOnMobile}
            >
              <span>03</span>Technology
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
