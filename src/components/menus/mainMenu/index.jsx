import { StyledNavLink, StyledNav, ShadedDiv } from './mainMenuStyles';
import logo from '../../../assets/shared/logo.svg';

const MainMenu = ({ children, open, handleClick }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={handleClick}>
        <img src={logo} alt="" />
      </StyledNavLink>
      <ShadedDiv $open={open}></ShadedDiv>
      {children}
    </StyledNav>
  );
};

export default MainMenu;
