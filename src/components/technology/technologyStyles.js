import styled from 'styled-components';

export const Picture = styled.picture`
    img {
        min-height: 250px;
        min-width: 100%;
        object-fit: cover;
    }
    @media only screen and (min-width: 1200px) {
        grid-column: 2/3;
        grid-row: 1/4;
        img {
            min-width: initial;
            object-fit: initial;
        }

    }
`

export const Container = styled.div`
    @media only screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns:1fr auto;
        grid-template-rows: 15% auto 15%;
        gap: 2rem;
}
`

export const MainContentContainer = styled.div`
    width: 90%;
    margin: 2rem auto;
@media only screen and (min-width: 1200px) {
    @media only screen and (min-width: 1200px) {
        width: 100%;
        margin: 0;
        grid-column: 1/2;
        grid-row: 2/3;
        display: grid;
        gap: 2rem;
        grid-template-columns:20% auto;
        grid-template-rows: auto auto;
}
`