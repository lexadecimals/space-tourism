import { StyledNavLink, Nav, ShadedDiv } from './mainMenuStyles';
import { useParams } from 'react-router-dom';

const MainMenu = ({ children }) => {
  const params = useParams();

  console.log('params', params);
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
