import data from '../../data.json';
import {
  StyledH1,
  MainContentContainer,
  FactsContainer,
  Container,
  StyledFactP,
  StyledSpan,
  StyledImage,
} from './locationStyles';
import { StyledPara } from '../../sharedStyles.js';
import { StyledNavLink } from '../../pages/destination/destinationStyles.js';

import { Menu } from '../../components/menus/destinationMenu';

const DestinationContent = ({ name }) => {
  const destinations = data.destinations;

  const body = destinations.filter((e) => {
    return e.name.toLowerCase() === name;
  })[0];
  return (
    <>
      {body && (
        <>
          <Container>
            <StyledImage src={`../../${body.images.png}`} alt="" />
            <MainContentContainer>
              <Menu>
                {destinations &&
                  destinations.map((location) => {
                    return (
                      <li key={location.description}>
                        <StyledNavLink
                          to={`/destination/${location.name.toLowerCase()}`}
                        >
                          {location.name}
                        </StyledNavLink>
                      </li>
                    );
                  })}
              </Menu>
              <StyledH1>{name}</StyledH1>
              <StyledPara>{body.description}</StyledPara>
              <hr />
              <FactsContainer>
                <StyledFactP>
                  avg. distance:<br></br>
                  <StyledSpan>{body.distance}</StyledSpan>
                </StyledFactP>
                <StyledFactP>
                  est. travel time: <br></br>
                  <StyledSpan>{body.travel}</StyledSpan>
                </StyledFactP>
              </FactsContainer>
            </MainContentContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default DestinationContent;
