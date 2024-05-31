import { NavLink, useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import data from '../../data.json';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;

  return (
    <>
      <h1>Pick Your Destination</h1>
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
      <Location name={name} />
      {/* <p>{data[name]}</p> */}
    </>
  );
};

export default Destination;
