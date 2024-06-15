import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const UnorderedList = styled.ul`
@media only screen and (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    grid-column: 2/3;
    grid-row: 1/2;
    color: white;
}
    `

export const StyledNavLink = styled(NavLink)`
font-size: 1rem;
text-transform: uppercase;
font-family: 'Barlow Condensed', sans-serif;
letter-spacing: 3px;
font-weight: 100;
color: white;
text-decoration: none;

// border-bottom: ${props => props.$selected === true ? "2px solid red" : "2px solid pink"}
// color: ${props => props.$selected ? "red" : "blue"}

&:visited {
    border-bottom: none;
}
&:hover {
    color: white;
    border-bottom: 2px solid silver;
    padding-bottom: 37px;
}
&.active {
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 37px;
}
span {
    margin-right: 1rem;
    font-weight: 700;
}
`