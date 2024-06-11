import { useParams } from 'react-router-dom';

import Technology from '../../components/technology/index.jsx';
import { Menu } from '../../components/menus/technologyMenu/index.jsx';
import data from '../../data.json';

import { Container, SubHeading, Span } from '../../sharedStyles.js';
import { StyledNavLink } from './technologiesStyles.js';

const Technologies = () => {
  const { tech } = useParams();
  const technologies = data.technology;
  return (
    <Container $technology className="you are here">
      <SubHeading>
        <Span>03</Span>Space Launch 101
      </SubHeading>
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
    </Container>
  );
};

export default Technologies;
