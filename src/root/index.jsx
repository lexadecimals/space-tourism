import { Outlet, NavLink, useLocation } from 'react-router-dom';
import data from '../data.json';

import Layout from '../components/layout/index.jsx';
import styles from './style.module.css';

export const Root = () => {
  const crewMember = encodeURI(data.crew[0].name);
  const destination = data.destinations[0].name.toLowerCase();
  const tech = encodeURI(data.technology[0].name);

  return (
    <Layout>
      <nav className={styles.nav}>
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
            <NavLink to={`/technology/${tech}`}>Technology</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Layout>
  );
};
