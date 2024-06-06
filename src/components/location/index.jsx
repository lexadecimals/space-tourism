import data from '../../data.json';
import {
  Heading,
  FactsContainer,
  Container,
  Fact,
  Span,
  Image,
} from './locationStyles';
import { Description } from '../../sharedStyles.js';

const Location = ({ name, children }) => {
  const body = data.destinations.filter(
    (e) => e.name.toLowerCase() === name
  )[0];
  return (
    <>
      {body && (
        <>
          <Image src={`../../${body.images.png}`} alt="" />
          <Container>
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
          </Container>
        </>
      )}
    </>
  );
};

export default Location;
