import data from '../../data.json';
import {
  Heading,
  MainContentContainer,
  FactsContainer,
  Container,
  Fact,
  Span,
  Image,
} from './locationStyles';
import { Description } from '../../sharedStyles.js';

const Location = ({ name, children }) => {
  const body = data.destinations.filter((e) => {
    return e.name.toLowerCase() === name;
  })[0];
  return (
    <>
      {body && (
        <>
          <Container>
            <Image src={`../../${body.images.png}`} alt="" />
            <MainContentContainer>
              {children}
              <Heading>{name}</Heading>
              <Description>{body.description}</Description>
              <hr />
              <FactsContainer>
                <Fact>
                  avg. distance:<br></br>
                  <Span>{body.distance}</Span>
                </Fact>
                <Fact>
                  est. travel time: <br></br>
                  <Span>{body.travel}</Span>
                </Fact>
              </FactsContainer>
            </MainContentContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default Location;
