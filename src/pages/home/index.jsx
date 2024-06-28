import { useState } from 'react';

import {
  Container,
  Heading,
  Span,
  StyledLink,
  StyledCircle,
  StyledButtonContainer,
} from './homeStyles';
import { Description } from '../../sharedStyles';

const Homepage = () => {
  const [hoverState, setHoverState] = useState(false);

  const handleMouseOver = () => {
    console.log('in');
    setHoverState(true);
  };

  const handleMouseOut = () => {
    setHoverState(false);
    console.log('out');
  };
  return (
    <Container className="home-container">
      <div>
        <Heading>
          So, you want to travel to <br></br>
          <Span>space</Span>
        </Heading>
        <Description>
          Space Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of
          it.Well sit back, and relax because we’ll give you a truly out of this
          world experience!
        </Description>
      </div>
      <StyledButtonContainer>
        <StyledCircle $hover={hoverState}></StyledCircle>
        <StyledLink
          to="/destination/moon"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Explore
        </StyledLink>
      </StyledButtonContainer>
    </Container>
  );
};

export default Homepage;
