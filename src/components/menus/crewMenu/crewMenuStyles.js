import styled from 'styled-components';

export const StyledNav = styled.nav`
  margin-top: 3rem;
  @media only screen and (min-width: 1200px) {
    align-self: center;
    margin-top: 0;
  }
`;

export const StyledUnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;
  @media only screen and (min-width: 1200px) {
    margin: 0;
  }
`;
