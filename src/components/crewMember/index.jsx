import data from '../../data.json';
import {
  StyledPara,
  StyledH1,
  HeadingSpan as HeadingSpan,
} from '../../sharedStyles';
import {
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

const CrewMember = ({ name, children }) => {
  const decodedName = decodeURI(name);
  const crewMember = data.crew.filter((e) => e.name === decodedName)[0];
  return (
    <Container>
      {crewMember && (
        <>
          <MainContentContainer>
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
            {children}
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

export default CrewMember;
