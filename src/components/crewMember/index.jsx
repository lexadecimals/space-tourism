import data from '../../data.json';
import {
  StyledPara,
  StyledH1,
  HeadingSpan as HeadingSpan,
} from '../../sharedStyles';
import {
  StyledNavLink,
  Container,
  MainContentContainer,
  StyledImage,
  GradientContainer,
  Gradient,
  FlexContainer,
} from './crewMemberStyles';
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

import { Menu } from '../../components/menus/crewMenu/index.jsx';
import { NotFound } from '../errors/index.jsx';
import douglasHurley from '../../assets/crew/image-douglas-hurley.png';
import markshuttleworth from '../../assets/crew/image-mark-shuttleworth.png';
import victorGlover from '../../assets/crew/image-victor-glover.png';
import anoushehAnsari from '../../assets/crew/image-anousheh-ansari.png';

const crewMembers = data.crew;
const imgUrls = {
  'douglas hurley': douglasHurley,
  'mark shuttleworth': markshuttleworth,
  'victor glover': victorGlover,
  'anousheh ansari': anoushehAnsari,
};

const CrewMemberContent = ({ name }) => {
  const decodedName = decodeURI(name);
  const crewMember = crewMembers.filter((e) => e.name === decodedName)[0];
  return (
    <Container>
      {crewMember ? (
        <>
          <MainContentContainer>
            <FlexContainer>
              <StyledH1 $fontsize={fontSizes.heading}>
                <HeadingSpan $fontsize={fontSizes.span}>
                  {crewMember.role}
                </HeadingSpan>
                <br></br>
                {name}
              </StyledH1>
              <StyledPara>{crewMember.bio}</StyledPara>
            </FlexContainer>
            <Menu>
              {crewMembers &&
                crewMembers.map((member) => {
                  return (
                    <li key={member.name}>
                      <StyledNavLink
                        to={`/crew/${member.name}`}
                        aria-label={member.name}
                      ></StyledNavLink>
                    </li>
                  );
                })}
            </Menu>
          </MainContentContainer>
          <GradientContainer>
            <Gradient></Gradient>
            <StyledImage
              src={imgUrls[crewMember.name.toLowerCase()]}
              alt={crewMember.name}
            />
          </GradientContainer>
        </>
      ) : (
        <NotFound />
      )}
    </Container>
  );
};

export default CrewMemberContent;
