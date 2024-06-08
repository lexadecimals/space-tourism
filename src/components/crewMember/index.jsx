import data from '../../data.json';
import { Description, Heading, HeadingSpan as Span } from '../../sharedStyles';
import {
  Container,
  MainContentContainer,
  Image,
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
            <Heading $fontsize={fontSizes.heading}>
              <Span $fontsize={fontSizes.span}>{crewMember.role}</Span>
              <br></br>
              {name}
            </Heading>
            <Description>{crewMember.bio}</Description>
            {children}
          </MainContentContainer>
          <GradientContainer>
            <Gradient></Gradient>
            <Image src={`../../${crewMember.images.png}`} alt="" />
          </GradientContainer>
        </>
      )}
    </Container>
  );
};

export default CrewMember;
