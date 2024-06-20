import { StyledNavLink, Nav, ShadedDiv } from './mainMenuStyles';

const MainMenu = ({ children, open, handleClick }) => {
  return (
    <Nav>
      <StyledNavLink to="/" onClick={handleClick}>
        <img src="../assets/shared/logo.svg" alt="" />
      </StyledNavLink>
      <ShadedDiv $open={open}></ShadedDiv>
      {children}
    </Nav>
  );
};

export default MainMenu;
