import { Outlet, useLocation } from 'react-router-dom';
import data from '../data.json';

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
  const crewMember = encodeURI(data.crew[0].name);
  const destination = data.destinations[0].name.toLowerCase();
  const tech = encodeURI(data.technology[0].name);

  const { name } = useParams();

  return (
    <Layout className="root">
      <MainMenu>
        <UnorderedList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={`/destination/${destination}`}>
              <span>01</span>Destination
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={`/crew/${crewMember}`}>
              <span>02</span>Crew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={`/technology/${tech}`}>
              <span>03</span>Technology
            </StyledNavLink>
          </li>
        </UnorderedList>
        <HamburgerIcon src="../assets/shared/icon-hamburger.svg"></HamburgerIcon>
        <CloseIcon src="../assets/shared/icon-close.svg"></CloseIcon>
      </MainMenu>
      <Outlet />
    </Layout>
  );
};
