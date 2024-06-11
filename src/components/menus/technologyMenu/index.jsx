import { UnorderedList } from './technologyMenuStyles.js';

export const Menu = ({ children }) => {
  return (
    <nav className="technology">
      <UnorderedList>{children}</UnorderedList>
    </nav>
  );
};
