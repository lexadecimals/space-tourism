import { NavLink, useParams } from 'react-router-dom';

import CrewMember from '../../components/crewMember/index.jsx';
import data from '../../data.json';

const Crew = () => {
  const { name } = useParams();
  const crewMembers = data.crew;

  return (
    <>
      <h1>Meet Your Crew</h1>
      <nav>
        <ul>
          {crewMembers &&
            crewMembers.map((member) => {
              return (
                <li key={member.name}>
                  <NavLink to={`/crew/${member.name}`}>{member.role}</NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
      <CrewMember name={name} />
    </>
  );
};

export default Crew;
