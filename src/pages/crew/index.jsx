import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import CrewMemberContent from '../../components/crewMember/index.jsx';
import { StyledH2, StyledSpan, StyledDiv } from '../../sharedStyles.js';

const Crew = () => {
  const { name } = useParams();

  return (
    <StyledDiv>
      <StyledH2>
        <StyledSpan>02</StyledSpan>Meet Your Crew
      </StyledH2>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <CrewMemberContent name={name} />
      </ErrorBoundary>
    </StyledDiv>
  );
};

export default Crew;
