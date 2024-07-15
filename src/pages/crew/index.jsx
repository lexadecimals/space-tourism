import { NavLink, useParams } from 'react-router-dom';

import CrewMember from '../../components/crewMember/index.jsx';
import data from '../../data.json';
import { StyledH2, StyledSpan, StyledDiv } from '../../sharedStyles.js';
import { StyledNavLink } from './crewStyles.js';
import { Menu } from '../../components/menus/crewMenu/index.jsx';

const Crew = () => {
  const { name } = useParams();
  const crewMembers = data.crew;

  return (
    <StyledDiv>
      <StyledH2>
        <StyledSpan>02</StyledSpan>Meet Your Crew
      </StyledH2>
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
    </StyledDiv>
  );
};

export default Crew;
