import { StyledUnorderedList, StyledNav } from './desintationMenuStyles';

export const Menu = ({ children }) => {
  return (
    <StyledNav>
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </StyledNav>
  );
};
