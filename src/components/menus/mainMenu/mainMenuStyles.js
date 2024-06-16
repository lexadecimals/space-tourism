
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    grid-column: 1/2;
    grid-row: 1/2;
`

export const Nav = styled.nav`
    width: 95%;
    margin-left: 5%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr;
    height: 100px;
    align-items: center;
    @media only screen and (min-width: 1200px) {
         margin-top: 2rem;
    }
    `
export const ShadedDiv = styled.div`
@media only screen and (min-width: 700px) {
height: 100px;
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/2;
    background-color: hsla(219, 24%, 12%, 1);
}
    

`

