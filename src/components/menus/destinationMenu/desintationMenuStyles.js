import styled from 'styled-components'

export const UnorderedList = styled.ul`
display: grid;
grid-template-columns: repeat(4, auto);
justify-content: space-between;
width: 80%;
margin: 0 auto;
@media only screen and (min-width: 700px) {
    width: 50%;
}
@media only screen and (min-width: 1200px) {
    width: 80%;
    margin: 0;
}
`
