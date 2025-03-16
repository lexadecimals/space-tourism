import { Outlet, useLocation } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';

import Layout from '../components/layout/index.jsx';
import MainMenu from '../components/menus/mainMenu/index.jsx';
import {
  StyledUnorderedList,
  StyledNavLink,
  StyledSpan,
  StyledHR,
  IconButton,
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
      setMenuIsOpen(false);
    }
  };

  const { pathname } = useLocation();
  const currentPath = pathname.toLowerCase();

  return (
    <Layout className="root">
      <MainMenu isOpen={menuIsOpen} handleClick={closeMenuOnMobile}>
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
              $active_route={
                currentPath.includes('/destination') ? 'true' : 'false'
              }
            >
              <StyledSpan>01</StyledSpan>Destination
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/crew/${crewMember}`}
              onClick={closeMenuOnMobile}
              $active_route={currentPath.includes('/crew') ? 'true' : 'false'}
            >
              <StyledSpan>02</StyledSpan>Crew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/technology/${tech}`}
              onClick={closeMenuOnMobile}
              $active_route={
                currentPath.includes('/technology') ? 'true' : 'false'
              }
            >
              <StyledSpan>03</StyledSpan>Technology
            </StyledNavLink>
          </li>
        </StyledUnorderedList>
        {menuIsOpen ? (
          <IconButton
            $close
            aria-label="close menu"
            onClick={toggleMenu}
          ></IconButton>
        ) : (
          <IconButton
            $hamburger
            aria-label="open menu"
            onClick={toggleMenu}
          ></IconButton>
        )}
      </MainMenu>
      <Outlet />
    </Layout>
  );
};
