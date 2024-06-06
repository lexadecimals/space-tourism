
import styled from 'styled-components'

export const Heading = styled.h1`
  text-transform: uppercase;
  font-family: 'Bellfair', serif;
  font-weight: 400;
  font-size: 3.5rem;
  letter-spacing: 2px;
`;

export const Description = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  line-height: 1.8;
  color: #d0d6f9;
`;

export const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const FactsContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Fact = styled.p`
    font-size: 0.875rem;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    color: #d0d6f9;
    font-weight: 100;
    font-style: normal;
    margin-bottom: 1rem;
`;

export const Span = styled.span`
    font-family: 'Cinzel', serif;
    font-weight: 400;
    font-size: 1.75rem;
    color: white;
    display: block;
    margin: 1rem;
`

export const Image = styled.img`
    max-width: 200px;
    transition: max-width 1s;
    @media only screen and (min-width:700px) {
        max-width: 300px;
    }
`