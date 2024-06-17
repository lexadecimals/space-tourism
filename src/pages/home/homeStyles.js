
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Heading = styled.h1`
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    line-height: 5rem;
    letter-spacing: 3px;
    font-weight: 100;
    @media only screen and (min-width: 700px) {
        font-size: 1.75rem;
        line-height: 8rem;
    }
`

export const Span = styled.span`
    text-transform: uppercase;
    font-family: 'Bellfair', serif;
    font-weight: 400;
    font-size: 5rem;
    @media only screen and (min-width: 700px) {
        font-size: 9.375rem;
    }
`

export const Container = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  align-content: space-evenly;
  width: 90%;
  margin: 0 auto 2rem;
  gap: 4rem;
  @media only screen and (min-width: 700px) {
    width: 60%;
    }
    @media only screen and (min-width: 1200px) {
        grid-template-columns: 40% 50%;
        align-items: center;
        margin-top: 0;
        width: 80%;
        max-width: 1000px;
        gap: 10%;
    }
`
export const StyledLink = styled(Link)`
    display: block;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background: white;
    line-height: 140px;
    text-align: center;
    font-family: 'Bellfair', serif;
    font-size: 1.125rem;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    transition: font-size 0.2s;
    &:hover,
    &:focus{
    }
    &:active{
    };

    @media only screen and (min-width:700px) {
        height: 270px;
        width: 270px;
        line-height: 270px;
        font-size: 2rem;
    }
    @media only screen and (min-width: 1200px) {
        justify-self: end;
        align-self: end;
  }
    }
 

`