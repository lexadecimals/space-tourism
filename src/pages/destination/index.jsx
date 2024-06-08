import { NavLink, useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import data from '../../data.json';
import { SubHeading, Span } from '../../sharedStyles.js';
import { Container } from '../../sharedStyles.js';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;

  return (
    <Container>
      <SubHeading>
        <Span>01</Span>Pick Your Destination
      </SubHeading>
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
