import { useParams } from 'react-router-dom';

import TechnologyContent from '../../components/technology/index.jsx';
import { StyledDiv, StyledH2, StyledSpan } from '../../sharedStyles.js';

const Technologies = () => {
  const { tech } = useParams();
  return (
    <StyledDiv $technology className="you are here">
      <StyledH2 $technology>
        <StyledSpan>03</StyledSpan>Space Launch 101
      </StyledH2>
      <TechnologyContent tech={tech} />
    </StyledDiv>
  );
};

export default Technologies;
