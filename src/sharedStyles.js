import styled from 'styled-components';

export const StyledPara = styled.p`
  line-height: 1.8;
  color: var(--text);
  @media only screen and (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.125rem;
    margin: 0;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 1rem 0 3rem;
  letter-spacing: 3px;
  font-weight: 100;
  @media only screen and (min-width: 700px) {
    font-size: 1.25rem;
    text-align: left;
    margin: ${(props) =>
    props.$technology ? '1rem 0 4rem 5%' : '1rem 0 4rem'};
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.75rem;
    margin: 0;
  }
`;

export const StyledSpan = styled.span`
  opacity: 0.5;
  font-weight: 400;
  padding-right: 1.75rem;
  @media only screen and (min-width: 700px) {
    font-size: 1.25rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.75rem;
  }
`;

export const HeadingSpan = styled.span`
  font-size: ${(props) => props.$fontsize.small};
  opacity: 0.5;
  @media only screen and (min-width: 700px) {
    font-size: ${(props) => props.$fontsize.medium};
  }
  @media only screen and (min-width: 1200px) {
    font-size: ${(props) =>
    props.$technology ? props.$fontsize.medium : props.$fontsize.large};
  }
  @media only screen and (min-width: 1250px) {
    font-size: ${(props) => props.$technology && props.$fontsize.large};
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  grid-row: 2/3;
  grid-column: 1/2;
  width: ${(props) => (props.$technology ? '100%' : '90%')};
  margin: 0 auto 2rem;
  @media only screen and (min-width: 700px) {
    width: ${(props) => props.$technology && '100%'};
  }
  @media only screen and (min-width: 1200px) {
    text-align: left;
    width: ${(props) => (props.$technology ? '80%' : '80%')};
    margin-left: ${(props) => props.$technology && '20%'};
    display: grid;
    grid-template-rows: 50px auto;
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1400px) {
    width: ${(props) => (props.$technology ? '80%' : '65%')};
  }
`;

export const StyledH1 = styled.h1`
  font-family: var(--font-serif), serif;
  line-height: 2rem;
  font-weight: 400;
  font-size: ${(props) => props.$fontsize.small};
  text-transform: uppercase;
  @media only screen and (min-width: 700px) {
    font-size: ${(props) => props.$fontsize.medium};
    line-height: 3.5rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: ${(props) => props.$fontsize.large};
  }
`;
