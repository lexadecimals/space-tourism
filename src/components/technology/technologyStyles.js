import styled from 'styled-components';


import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 1.125rem;
  font-family: Bellefair, serif;
  height: 40px;
  width: 40px;
  border: 1px solid silver;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;

  transition: border-color 0.2s ease,
              background-color 0.2s ease;

  &:hover {
    border: 1px solid white;
  }
  &.active {
    background-color: white;
    color: black;
    border: 1px solid white;
  }
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
    height: 56px;
    width: 56px;
    line-height: 56px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    height: 80px;
    width: 80px;
    line-height: 80px;
  }
`;

export const Picture = styled.picture`
  img {
    min-height: 250px;
    min-width: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 1200px) {
    /* grid-column: 2/3;
        grid-row: 1/4; */
    order: 2;
    img {
      min-width: initial;
      object-fit: initial;
    }
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    /* display: grid;
        grid-template-columns:1fr auto;
        grid-template-rows: 15% auto 15%; */
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const MainContentContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  @media only screen and (min-width: 1200px) {
    @media only screen and (min-width: 1200px) {
      width: 60%;
      margin: 0;
      /* grid-column: 1/2;
        grid-row: 2/3; */
      display: grid;
      gap: 2rem;
      grid-template-columns: 20% auto;
      grid-template-rows: auto auto;
    }
  }
`;
export const StyledDiv = styled.div`
  @media only screen and (min-width: 1200px) {
    grid-column: 2/4;
    grid-row: ${(props) => (props.$description ? '2/3' : '1/2')};
  }
`;
