import styled from 'styled-components';

export const StyledUnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
  width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 700px) {
    width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
  }
`;
