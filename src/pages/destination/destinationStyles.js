import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`

`

export const StyledNavLink = styled(NavLink)`
    color: #D0D6F9;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    display: inline-block;
    font-size: 0.875rem;
    
    &:hover {
        border-bottom: 2px solid silver;
        padding-bottom: 10px;
    }
    &.active {
        color: white;
        border-bottom: 2px solid white;
        padding-bottom: 10px;
    }
   @media only screen and (min-width: 700px) {
    font-size: 1rem;
   }
   @media only screen and (min-width: 1200px) {
    font-size: 1rem;
   }
 
`