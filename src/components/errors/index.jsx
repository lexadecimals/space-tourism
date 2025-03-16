import { useRouteError } from 'react-router-dom';
import { StyledLink, StyledDiv, StyledImage } from './errorsStyles.js';
import planetUrl from '../../assets/shared/icon-planet.svg';

export const NotFound = () => {
  return (
    <div>
      <h2>Content not Found!</h2>
      <StyledLink to="/">Take Me Home</StyledLink>
    </div>
  );
};

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <StyledDiv>
      <h2>
        {error.status == '404'
          ? '404 Page Not Found'
          : 'Opps! There was an error.'}
      </h2>
      <StyledLink to="/">
        <StyledImage src={planetUrl} />
        <p>Take Me Home</p>
      </StyledLink>
    </StyledDiv>
  );
};
