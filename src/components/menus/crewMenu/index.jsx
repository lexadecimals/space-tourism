import { StyledNav, StyledUnorderedList } from './crewMenuStyles.js';

export const Menu = ({ children }) => {
  return (
    <StyledNav>
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </StyledNav>
  );
};
