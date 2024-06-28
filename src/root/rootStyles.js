import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const UnorderedList = styled.ul`
align-self: start;
display: ${props => props.$open === true ? "flex" : "none"};
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
    margin-left: 20%;
    width: 80%;

    `

export const StyledNavLink = styled(NavLink)`
font-size: 1rem;
text-transform: uppercase;
font-family: 'Barlow Condensed', sans-serif;
letter-spacing: 3px;
font-weight: 100;
color: white;
text-decoration: none;
&:visited {
    border-bottom: none;
}
&:hover {
    color: white;
    border-bottom: 2px solid silver;
    padding-bottom: 10px;
    @media only screen and (min-width: 700px) {
        padding-bottom: 37px;
    }

}
&.active {
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
    @media only screen and (min-width: 700px) {
        padding-bottom: 37px;
    }
}

`

export const StyledSpan = styled.span`
    margin-right: 1rem;
    font-weight: 700;
    @media only screen and (min-width: 700px) {
        display: ${props => props.$home && "none"};
    }
    @media only screen and (min-width: 1200px) {
        display: initial;
    }
`

export const HamburgerIcon = styled.img`
cursor: pointer;
grid-column: 2/3;
grid-row: 1/2;
justify-self: end;
z-index: 4;
margin-right: 10%;
@media only screen and (min-width: 700px) {
    display: none;
}
`

export const CloseIcon = styled.img`
cursor: pointer;
grid-column: 2/3;
grid-row: 1/2;
justify-self: end;
z-index: 4;
margin-right: 10%;
@media only screen and (min-width: 700px) {
    display: none;
    

}
`
