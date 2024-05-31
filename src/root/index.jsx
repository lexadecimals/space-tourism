import { Outlet, NavLink } from 'react-router-dom';
import data from '../data.json';

export const Root = () => {
  const crewMember = encodeURI(data.crew[0].name);
  const destination = data.destinations[0].name.toLowerCase();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={`/destination/${destination}`}>Destination</NavLink>
          </li>
          <li>
            <NavLink to={`/crew/${crewMember}`}>Crew</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
