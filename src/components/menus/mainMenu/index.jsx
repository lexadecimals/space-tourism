import { StyledNavLink, StyledNav, ShadedDiv } from './mainMenuStyles';
import logo from '../../../assets/shared/logo.svg';

const MainMenu = ({ children, isOpen, handleClick }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={handleClick}>
        <img src={logo} alt="site home" />
      </StyledNavLink>
      <ShadedDiv $open={isOpen}></ShadedDiv>
      {children}
    </StyledNav>
  );
};

export default MainMenu;
