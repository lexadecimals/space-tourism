import { StyledUnorderedList, StyledNav } from './technologyMenuStyles.js';

export const Menu = ({ children }) => {
  return (
    <StyledNav className="technology">
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </StyledNav>
  );
};
