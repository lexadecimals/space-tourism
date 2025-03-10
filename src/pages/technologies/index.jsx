import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import TechnologyContent from '../../components/technology/index.jsx';
import { StyledDiv, StyledH2, StyledSpan } from '../../sharedStyles.js';
import ErrorFallback from '../../components/errorFallback/index.jsx';

const Technologies = () => {
  const { tech } = useParams();
  return (
    <StyledDiv $technology className="you are here">
      <StyledH2 $technology>
        <StyledSpan>03</StyledSpan>Space Launch 101
      </StyledH2>
      <ErrorBoundary fallback={ErrorFallback}>
        <TechnologyContent tech={tech} />
      </ErrorBoundary>
    </StyledDiv>
  );
};

export default Technologies;
