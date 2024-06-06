import { NavLink, useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';
import data from '../../data.json';
import styles from './style.module.css';

const Destination = () => {
  const { name } = useParams();
  const destinations = data.destinations;

  return (
    <div className={styles['container-destination']}>
      <h2 className={styles['heading-destination-xs']}>
        <span>01</span> Pick Your Destination
      </h2>
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
    </div>
  );
};

export default Destination;
