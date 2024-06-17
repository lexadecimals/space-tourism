import { StyledNavLink, Nav, ShadedDiv } from './mainMenuStyles';
import { useParams } from 'react-router-dom';

const MainMenu = ({ children, open, handleClick }) => {
  return (
    <Nav>
      <StyledNavLink to="/" onClick={handleClick}>
        <img src="../assets/shared/logo.svg" alt="" />
      </StyledNavLink>
      {/* change z index of nav so can't see when mobile menu is open */}
      <ShadedDiv $open={open}></ShadedDiv>
      {children}
    </Nav>
  );
};

export default MainMenu;
