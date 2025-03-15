import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '/assets/shared/icon-hamburger.svg';
import closeIcon from '/assets/shared/icon-close.svg';

export const StyledUnorderedList = styled.ul`
  align-self: start;
  display: ${(props) => (props.$open === true ? 'flex' : 'none')};
  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 4;
  gap: 2rem;
  margin-left: 2rem;

  @media only screen and (min-width: 700px) {
    display: flex;
    align-self: initial;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    grid-column: 2/3;
    grid-row: 1/2;
    color: white;
    gap: 0;
    margin-left: 0;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 10%;
    width: 80%;
    justify-content: space-between;

  }
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  text-transform: uppercase;
  font-family: var(--font-main), sans-serif;
  letter-spacing: 3px;
  font-weight: 100;
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  transition: border-width 0.2s;
  transition-timing-function: ease;
  
  @media only screen and (min-width: 700px) {
      display: inline;
      //keep active parent link border styled
      border-width: ${props => props.$active_route == "true" && "2px"};
      border-bottom-style: ${props => props.$active_route == "true" && "solid"};
      border-color: ${props => props.$active_route == "true" && "white"};
      padding-bottom: 37px;
    }

  &:visited {
    border-bottom: none;
  }
  
  &:hover {
    color: white;
    border-right: 4px solid silver;

    @media only screen and (min-width: 700px) {
      padding-bottom: 37px;
      border-right: none;
      border-bottom-style: solid;
      border-color: silver;
      border-width: 2px;
    }
  }
  &.active {
    color: white;
    border-right: 4px solid white;

    @media only screen and (min-width: 700px) {
      padding-bottom: 37px;
      border-right: none;
      border-bottom: 2px solid white;
    }
  }

`;

export const StyledSpan = styled.span`
  margin-right: 1rem;
  font-weight: 700;
  @media only screen and (min-width: 700px) {
    display: none;
  }
  @media only screen and (min-width: 900px) {
    display: inline;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  background-image: ${(props) => props.$hamburger
    ? `url("${hamburgerIcon}")`
    : props.$close &&
    `url("${closeIcon}")`};
  background-repeat: no-repeat; 
  background-position: center;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;
  z-index: 4;
  padding: 10%;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;


export const StyledHR = styled.hr`
  display: none;  
  @media only screen and (min-width: 1200px) {
    position: absolute;
    display: block;
    border: 0.5px solid white;
    margin-left: 100px;
    width: 35%;
    opacity: 0.25;
    z-index: 10;
  }
`
