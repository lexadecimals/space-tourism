import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h2>Content not Found!</h2>
      <Link to="/">Take Me Home</Link>
    </div>
  );
};

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <p style={{ color: 'red', fontSize: '30px' }}>
        {error.status == '404' ? '404 Page Not Found' : ''}
      </p>
      <Link to="/">Take Me Home</Link>
    </div>
  );
};
