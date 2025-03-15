import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  background: #979797;
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 50%;
  transition: background-color 0.5s;

  &:hover {
    background: #c7c7c7;
  }
  &.active {
    background: white;
  }
  &:after {
  content: "";
  position: absolute;
  width: 44px;
  height: 44px;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%);
  }
  
  @media only screen and (min-width: 1200px) {
    width: 15px;
    height: 15px;
  }
`;


export const Container = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  @media only screen and (min-width: 700px) {
    gap: 3rem;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  align-content: center;
`;

export const MainContentContainer = styled.div`
  @media only screen and (min-width: 700px) {
    max-width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: initial;
    display: grid;
    height: 100%;
    align-items: end;
  }
`;
export const TextContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media only screen and (min-width: 1200px) {
    gap: 0;
  }
`;
export const StyledImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  max-height: 400px;
  @media only screen and (min-width: 1200px) {
    max-height: 500px;
  }
`;
export const Gradient = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(12, 14, 25, 1) 0%,
    rgba(0, 0, 0, 0) 12%
  );
`;

export const GradientContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media only screen and (min-width: 1200px) {
    height: 500px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`