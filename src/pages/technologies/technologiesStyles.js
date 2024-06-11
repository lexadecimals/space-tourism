import styled from 'styled-components';

import { NavLink } from 'react-router-dom';


export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    display: inline-block;
    font-size: 1.125rem;
    font-family: Bellefair, serif;
    height: 40px;
    width: 40px;
    border: 1px solid silver;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    
    &:hover {
        border: 1px solid white;
    }
    &.active {
        background-color: white;
        color: black;
        border: 1px solid white;
    }
   @media only screen and (min-width: 700px) {
        font-size: 1.5rem;
        height: 56px;
        width: 56px;
        line-height: 56px;

   }
   @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    height: 80px;
    width: 80px;
    line-height: 80px;

   }
 
`