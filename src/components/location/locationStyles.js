
import styled from 'styled-components'

export const Heading = styled.h1`
  text-transform: uppercase;
  font-family: 'Bellfair', serif;
  font-weight: 400;
  font-size: 3.5rem;
  letter-spacing: 5px;
  line-height: 3.5rem;
  @media only screen and (min-width: 700px) {
    font-size: 5rem;
    line-height: 5rem;
  
  }
  @media only screen and (min-width: 1200px) {
      font-size: 6rem;
      line-height: 6rem;
    }
`;


export const Container = styled.div`
  display: grid;
  gap: 3rem;
  justify-items: center;
  @media only screen and (min-width: 700px) {
    gap: 5rem;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  @media only screen and (min-width: 1200px) {
    gap: 2rem
  }
`

export const FactsContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    margin: 0;
    width: 100%;
    gap: 1rem;
    }
`;

export const Fact = styled.p`
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1.75px;
    color: var(--text);
    font-weight: 100;
    font-style: normal;
    margin-bottom: 1rem;
`;

export const Span = styled.span`
    font-family: var(--font-serif), serif;
    font-weight: 400;
    font-size: 1.75rem;
    color: white;
    display: block;
    margin: 1rem;
    @media only screen and (min-width: 1200px) {
        margin: 1rem 0;
    }

`

export const Image = styled.img`
    max-width: 150px;
    transition: max-width 1s;
    @media only screen and (min-width:700px) {
        max-width: 300px;
    }
    @media only screen and (min-width:1200px) {
        max-width: 500px;
        justify-self: start;
    }

`