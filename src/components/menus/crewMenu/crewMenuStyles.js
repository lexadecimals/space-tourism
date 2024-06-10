import styled from 'styled-components';

export const Nav = styled.nav`
margin-top: 3rem;
@media only screen and (min-width: 1200px) {
    align-self: end;    
    margin-top: 0;
  }
`

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  width: 120px;
  margin: 0 auto;
  @media only screen and (min-width: 700px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 200px;
    margin: 0;
  }
`;

