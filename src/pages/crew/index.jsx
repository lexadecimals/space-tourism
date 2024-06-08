import { NavLink, useParams } from 'react-router-dom';

import CrewMember from '../../components/crewMember/index.jsx';
import data from '../../data.json';
import { SubHeading, Span, Container } from '../../sharedStyles.js';

const Crew = () => {
  const { name } = useParams();
  const crewMembers = data.crew;

  return (
    <Container>
      <SubHeading>
        <Span>02</Span>Meet Your Crew
      </SubHeading>
      <CrewMember name={name}>
        <nav>
          <ul>
            {crewMembers &&
              crewMembers.map((member) => {
                return (
                  <li key={member.name}>
                    <NavLink to={`/crew/${member.name}`}>*</NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
      </CrewMember>
    </Container>
  );
};

export default Crew;
