import { NavLink, useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import data from '../../data.json';
import { Container, Heading, Span } from './destinationStyles.js';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;

  return (
    <Container>
      <Heading>
        <Span>01</Span> Pick Your Destination
      </Heading>
      <Location name={name}>
        <nav>
          <ul>
            {destinations &&
              destinations.map((location) => {
                return (
                  <li key={location.description}>
                    <NavLink to={`/destination/${location.name.toLowerCase()}`}>
                      {location.name}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
      </Location>
    </Container>
  );
};

export default Destination;
