import { NavLink, useParams } from 'react-router-dom';

import CrewMember from '../../components/crewMember/index.jsx';
import data from '../../data.json';
import { SubHeading, Span, Container } from '../../sharedStyles.js';
import { StyledNavLink } from './crewStyles.js';
import { Menu } from '../../components/menus/crewMenu/index.jsx';

const Crew = () => {
  const { name } = useParams();
  const crewMembers = data.crew;

  return (
    <Container>
      <SubHeading>
        <Span>02</Span>Meet Your Crew
      </SubHeading>
      <CrewMember name={name}>
        <Menu>
          {crewMembers &&
            crewMembers.map((member) => {
              return (
                <li key={member.name}>
                  <StyledNavLink to={`/crew/${member.name}`}></StyledNavLink>
                </li>
              );
            })}
        </Menu>
      </CrewMember>
    </Container>
  );
};

export default Crew;
