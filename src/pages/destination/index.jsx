import { useParams } from 'react-router-dom';

import DestinationContent from '../../components/location/index.jsx';

import { StyledDiv, StyledH2, StyledSpan } from '../../sharedStyles.js';

const Destination = () => {
  const { name } = useParams();
  return (
    <StyledDiv>
      <StyledH2>
        <StyledSpan>01</StyledSpan>Pick Your Destination
      </StyledH2>
      <DestinationContent name={name} />
    </StyledDiv>
  );
};

export default Destination;
