import data from '../../data.json';
import {
  StyledNavLink,
  StyledH1,
  MainContentContainer,
  FactsContainer,
  Container,
  StyledFactP,
  StyledSpan,
  StyledImage,
} from './locationStyles';
import { StyledPara } from '../../sharedStyles.js';

import { Menu } from '../../components/menus/destinationMenu';
import marsUrl from '../../assets/destination/image-mars.png';
import moonUrl from '../../assets/destination/image-moon.png';
import europaUrl from '../../assets/destination/image-europa.png';
import titanUrl from '../../assets/destination/image-titan.png';
import { NotFound } from '../errors/index.jsx';

const imgUrls = {
  mars: marsUrl,
  moon: moonUrl,
  titan: titanUrl,
  europa: europaUrl,
};

const destinations = data.destinations;

const DestinationContent = ({ name }) => {
  const body = destinations.filter((e) => e.name.toLowerCase() === name)[0];

  return (
    <>
      {body ? (
        <Container>
          <StyledImage src={imgUrls[name]} alt={name} />
          <MainContentContainer>
            <Menu>
              {destinations &&
                destinations.map((location) => {
                  return (
                    <li key={location.description}>
                      <StyledNavLink
                        to={`/destination/${location.name.toLowerCase()}`}
                        aria-label={location.name}
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
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DestinationContent;
