import { useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import { Menu } from '../../components/menus/destinationMenu';
import data from '../../data.json';

import { StyledDiv, StyledH2, StyledSpan } from '../../sharedStyles.js';
import { StyledNavLink } from './destinationStyles.js';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;
  return (
    <StyledDiv className="here">
      <StyledH2>
        <StyledSpan>01</StyledSpan>Pick Your Destination
      </StyledH2>
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
    </StyledDiv>
  );
};

export default Destination;
