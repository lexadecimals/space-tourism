import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
    margin: 5% auto;
    width: 200px;
    text-align: center;
`
export const StyledLink = styled(Link)`
    color: white;
    display: block;
    &:link, &:visited {
        text-decoration: none;
    }
    &:hover, &:active {
        text-decoration: underline;
    }
`
export const StyledImage = styled.img`
    width: 44px;
    height: 44px;
    margin: 1rem auto;
`