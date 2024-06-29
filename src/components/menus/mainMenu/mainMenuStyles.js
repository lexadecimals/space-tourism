import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const Nav = styled.nav`
  width: 95%;
  margin-left: 5%;
  grid-column: 1/2;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 100px auto;
  align-items: center;
  @media only screen and (min-width: 700px) {
    grid-template-rows: 1fr;
    height: 100px;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: auto 60%;
    margin-top: 2rem;
  }
`;
export const ShadedDiv = styled.div`
  display: ${(props) => (props.$open === true ? 'block' : 'none')};
  backdrop-filter: blur(56px);
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  grid-row: 1/3;
  z-index: 3;
  @media only screen and (min-width: 700px) {
    display: block;
    height: 100px;
    width: 100%;
    grid-row: 1/2;
    background-color: hsla(219, 24%, 12%, 1);
  }

  @media only screen and (min-width: 1200px) {
    background-color: initial;
  }
`;
