import styled from 'styled-components';

export const StyledUnorderedList = styled.ul`
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
`;
export const StyledNav = styled.nav`
  margin-bottom: 2rem;
  @media only screen and (min-width: 1200px) {
    grid-column: 1/2;
    grid-row: 1/3;
    height: 100%;
    margin-bottom: 0;
  }
`;

// export const StyledNav = styled.nav`
//   margin-bottom: ${(props) => props.$description && "2rem"};
//   @media only screen and (min-width: 1200px) {
//     grid-column: ${(props) => props.$description && "1/2"};
//     grid-row: ${(props) => props.$description && "1/3"};
//     height: ${(props) => props.$description && "100%"};
//     margin-bottom: ${(props) => props.$description && "0"};
//   }
// `;
