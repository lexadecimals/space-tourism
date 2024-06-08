import { UnorderedList } from './desintationMenuStyles';

export const Menu = ({ children }) => {
  return (
    <nav>
      <UnorderedList>{children}</UnorderedList>
    </nav>
  );
};
