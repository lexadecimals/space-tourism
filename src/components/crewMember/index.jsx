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
import { NotFound } from '../notFound/index.jsx';
const crewMembers = data.crew;

const CrewMemberContent = ({ name }) => {
  const decodedName = decodeURI(name);
  const crewMember = data.crew.filter((e) => e.name === decodedName)[0];

  return (
    <Container>
      {crewMember && (
        <>
          <MainContentContainer>
            <Menu>
              {crewMembers &&
                crewMembers.map((member) => {
                  return (
                    <li key={member.name}>
                      <StyledNavLink
                        to={`/crew/${member.name}`}
                      ></StyledNavLink>
                    </li>
                  );
                })}
            </Menu>
            <div>
              <StyledH1 $fontsize={fontSizes.heading}>
                <HeadingSpan $fontsize={fontSizes.span}>
                  {crewMember.role}
                </HeadingSpan>
                <br></br>
                {name}
              </StyledH1>
              <StyledPara>{crewMember.bio}</StyledPara>
            </div>
          </MainContentContainer>
          <GradientContainer>
            <Gradient></Gradient>
            <StyledImage src={`../../${crewMember.images.png}`} alt="" />
          </GradientContainer>
        </>
      )}
    </Container>
  );
};

export default CrewMemberContent;
