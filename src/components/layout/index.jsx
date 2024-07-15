import { useLocation } from 'react-router-dom';

import { StyledDiv } from './layoutStyles';

const Layout = ({ children }) => {
  const loc = useLocation().pathname;

  if (loc.indexOf('destination') > 0) {
    return <StyledDiv $destination>{children}</StyledDiv>;
  } else if (loc.indexOf('technology') > 0) {
    return <StyledDiv $technology>{children}</StyledDiv>;
  } else if (loc.indexOf('crew') > 0) {
    return <StyledDiv $crew>{children}</StyledDiv>;
  } else {
    return <StyledDiv $home>{children}</StyledDiv>;
  }
};
export default Layout;
