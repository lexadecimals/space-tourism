import { useState } from 'react';

import {
  StyledContainerDiv,
  StyledH1,
  StyledSpan,
  StyledLink,
  StyledDiv,
  StyledButtonContainer,
} from './homeStyles';
import { StyledPara } from '../../sharedStyles';

const Homepage = () => {
  const [hoverState, setHoverState] = useState(false);

  const handleMouseOver = () => {
    setHoverState(true);
  };

  const handleMouseOut = () => {
    setHoverState(false);
  };
  return (
    <StyledContainerDiv className="home-container">
      <div>
        <StyledH1>
          So, you want to travel to <br></br>
          <StyledSpan>space</StyledSpan>
        </StyledH1>
        <StyledPara>
          Let&rsquo;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&rsquo;ll give you a truly out of
          this world experience!
        </StyledPara>
      </div>
      <StyledButtonContainer>
        <StyledDiv $hover={hoverState}></StyledDiv>
        <StyledLink
          to="/destination/moon"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Explore
        </StyledLink>
      </StyledButtonContainer>
    </StyledContainerDiv>
  );
};

export default Homepage;
