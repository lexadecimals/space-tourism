import { useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import { Menu } from '../../components/menus/destinationMenu';
import data from '../../data.json';

import { Container, SubHeading, Span } from '../../sharedStyles.js';
import { StyledNavLink } from './destinationStyles.js';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;

  return (
    <Container>
      <SubHeading>
        <Span>01</Span>Pick Your Destination
      </SubHeading>
      <Location name={name}>
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
      </Location>
    </Container>
  );
};

export default Destination;
