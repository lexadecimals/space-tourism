import { StyledNavLink, StyledNav, ShadedDiv } from './mainMenuStyles';

const MainMenu = ({ children, open, handleClick }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={handleClick}>
        <img src="../assets/shared/logo.svg" alt="" />
      </StyledNavLink>
      <ShadedDiv $open={open}></ShadedDiv>
      {children}
    </StyledNav>
  );
};

export default MainMenu;
