import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  background: #979797;
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 50%;
  &:hover {
    background: #c7c7c7;
  }
  &.active {
    background: white;
  }
  @media only screen and (min-width: 1200px) {
    width: 15px;
    height: 15px;
  }
`;
