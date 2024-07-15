import { useParams } from 'react-router-dom';

import Technology from '../../components/technology/index.jsx';
import { Menu } from '../../components/menus/technologyMenu/index.jsx';
import data from '../../data.json';

import { StyledDiv, StyledH2, StyledSpan } from '../../sharedStyles.js';
import { StyledNavLink } from './technologiesStyles.js';

const Technologies = () => {
  const { tech } = useParams();
  const technologies = data.technology;
  return (
    <StyledDiv $technology className="you are here">
      <StyledH2 $technology>
        <StyledSpan>03</StyledSpan>Space Launch 101
      </StyledH2>
      <Technology tech={tech}>
        <Menu>
          {technologies &&
            technologies.map((tech) => {
              return (
                <li key={tech.description}>
                  <StyledNavLink to={`/technology/${tech.name}`}>
                    {tech.name === 'Launch vehicle'
                      ? '1'
                      : tech.name === 'Spaceport'
                      ? '2'
                      : '3'}
                  </StyledNavLink>
                </li>
              );
            })}
        </Menu>
      </Technology>
    </StyledDiv>
  );
};

export default Technologies;
