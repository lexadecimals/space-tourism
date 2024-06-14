import { StyledNavLink, Nav, ShadedDiv } from './mainMenuStyles';

const MainMenu = ({ children }) => {
  return (
    <Nav>
      <StyledNavLink to="/">
        <img src="../assets/shared/logo.svg" alt="" />
      </StyledNavLink>
      <ShadedDiv></ShadedDiv>
      {children}
    </Nav>
  );
};

export default MainMenu;
