import data from '../../data.json';
import { StyledPara, StyledH1, HeadingSpan as Span } from '../../sharedStyles';
import {
  StyledNavLink,
  Picture,
  Container,
  MainContentContainer,
  StyledDiv,
} from './technologyStyles';

const fontSizes = {
  heading: {
    small: '1.5rem',
    medium: '2.5rem',
    large: '3.5rem',
  },
  span: {
    small: '1.125rem',
    medium: '1.5rem',
    large: '2rem',
  },
};
import { Menu } from '../../components/menus/technologyMenu/index.jsx';
const technologies = data.technology;

const TechnologyContent = ({ tech }) => {
  const decodedTech = decodeURI(tech).toLowerCase(0);
  const techType = data.technology.filter(
    (e) => e.name.toLowerCase() === decodedTech
  )[0];
  const fileName = techType.name.split(' ').join('-').toLowerCase();

  return (
    <Container>
      {techType && (
        <>
          <Picture>
            <source
              media="(min-width: 1200px)"
              srcSet={`../../assets/technology/image-${fileName}-portrait.jpg`}
            />
            <img
              src={`../../assets/technology/image-${fileName}-landscape.jpg`}
              alt=""
            />
          </Picture>
          <MainContentContainer>
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
            <StyledDiv>
              <StyledH1 $fontsize={fontSizes.heading}>
                <Span $fontsize={fontSizes.span} $technology className="here">
                  The Terminology...
                </Span>
                <br></br>
                {tech}
              </StyledH1>
            </StyledDiv>
            <StyledDiv $description>
              <StyledPara>{techType.description}</StyledPara>
              {/* </div> */}
            </StyledDiv>
          </MainContentContainer>
        </>
      )}
    </Container>
  );
};

export default TechnologyContent;
