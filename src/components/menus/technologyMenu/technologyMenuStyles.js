
import styled from 'styled-components';

export const UnorderedList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    width: 30%;
    margin: 0 auto;
    justify-content: center;
@media only screen and (min-width: 1200px) {
   
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
    width: 100%;
    align-items: center;
}

`

