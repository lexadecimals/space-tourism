import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto 2rem;
    @media only screen and (min-width: 1200px) {
        text-align: left;
        width: 75%;
    }
    @media only screen and (min-width: 1400px) {
        width: 65%;
    }
`

export const Heading = styled.h2`
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    line-height: 6rem;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-weight: 100;
    @media only screen and (min-width: 1200px) {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }
`

export const Span = styled.span`
    opacity: 0.5;
    font-weight: 400;
`