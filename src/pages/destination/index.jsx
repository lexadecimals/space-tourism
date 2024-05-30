import { NavLink, useParams } from 'react-router-dom';

import Location from '../../components/location/index.jsx';

const Destination = () => {
  const { name } = useParams();

  return (
    <>
      <h1>Pick Your Destination</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/destination/moon">Moon</NavLink>
          </li>
          <li>
            <NavLink to="/destination/mars">Mars</NavLink>
          </li>
          <li>
            <NavLink to="/destination/europa">Europa</NavLink>
          </li>
          <li>
            <NavLink to="/destination/titan">Titan</NavLink>
          </li>
        </ul>
      </nav>
      <Location name={name} />
      {/* <p>{data[name]}</p> */}
    </>
  );
};

export default Destination;
