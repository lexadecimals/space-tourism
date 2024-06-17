import { StyledNavLink, Nav, ShadedDiv } from './mainMenuStyles';
import { useParams } from 'react-router-dom';

const MainMenu = ({ children, open }) => {
  return (
    <Nav>
      <StyledNavLink to="/">
        <img src="../assets/shared/logo.svg" alt="" />
      </StyledNavLink>
      {/* change z index of nav so can't see when mobile menu is open */}
      <ShadedDiv $open={open}></ShadedDiv>
      {children}
    </Nav>
  );
};

export default MainMenu;
