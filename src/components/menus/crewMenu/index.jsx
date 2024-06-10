import { Nav, UnorderedList } from './crewMenuStyles.js';

export const Menu = ({ children }) => {
  return (
    <Nav>
      <UnorderedList>{children}</UnorderedList>
    </Nav>
  );
};
