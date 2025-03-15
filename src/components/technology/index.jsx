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
import launchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';

const imgUrls = {
  portrait: {
    'launch vehicle': launchVehiclePortrait,
    'space capsule': spaceCapsulePortrait,
    spaceport: spaceportPortrait,
  },
  landscape: {
    'launch vehicle': launchVehicleLandscape,
    'space capsule': spaceCapsuleLandscape,
    spaceport: spaceportLandscape,
  },
};

const technologies = data.technology;

const TechnologyContent = ({ tech }) => {
  const decodedTech = decodeURI(tech).toLowerCase(0);
  const techType = data.technology.filter(
    (e) => e.name.toLowerCase() === decodedTech
  )[0];
  const fileName = techType.name.toLowerCase();

  return (
    <Container>
      {techType && (
        <>
          <Picture>
            <source
              media="(min-width: 1200px)"
              srcSet={imgUrls.portrait[fileName]}
              alt={fileName}
            />
            <img srcSet={imgUrls.landscape[fileName]} alt={fileName} />
          </Picture>
          <MainContentContainer>
            <Menu>
              {technologies &&
                technologies.map((tech) => {
                  return (
                    <li key={tech.description}>
                      <StyledNavLink
                        to={`/technology/${tech.name}`}
                        aria-label={tech.name}
                      >
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
