import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledH1 = styled.h1`
  color: var(--text);
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 5rem;
  letter-spacing: 3px;
  font-weight: 100;
  @media only screen and (min-width: 700px) {
    font-size: 1.75rem;
    line-height: 8rem;
  }
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  font-family: var(--font-serif), serif;
  letter-spacing: 5px;
  font-weight: 400;
  font-size: 5rem;
  color: var(--white);
  @media only screen and (min-width: 700px) {
    font-size: 9.375rem;
  }
`;

export const StyledContainerDiv = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  width: 90%;
  margin: 0 auto;
  @media only screen and (min-width: 700px) {
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    text-align: left;
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: end;
    margin-top: 0;
    padding-bottom: 5%;
    width: 80%;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 1200px;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  height: 140px;
  width: 140px;
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 50%;
  background: white;
  line-height: 140px;
  text-align: center;
  font-family: var(--font-serif), serif;
  font-size: 1.125rem;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  transition: font-size 0.2s;
  &:hover,
  &:focus {
  }
  &:active {
  }

  @media only screen and (min-width: 700px) {
    height: 270px;
    width: 270px;
    line-height: 270px;
    font-size: 2rem;
  }
  @media only screen and (min-width: 1200px) {
  }
`;

//overlaps button and button hover circle
export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 250px;
  margin: 1rem auto 0;
  justify-items: center;
  align-items: center;
  @media only screen and (min-width: 700px) {
    width: 400px;
    height: 400px;
    margin-top: 0;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: -65px;
  }
`;

//button hover effect:
export const StyledDiv = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  grid-row: 1/2;
  grid-column: 1/2;
  transition: background-color 1s;
  background-color: ${(props) =>
    props.$hover === true ? 'hsla(0, 100%, 99%, 0.1)' : 'transparent'};
  @media only screen and (min-width: 700px) {
    width: 400px;
    height: 400px;
  }
`;
