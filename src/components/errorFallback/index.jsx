import { NavLink } from 'react-router-dom';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <NavLink href="/" onClick={resetErrorBoundary}>
        Take me Home
      </NavLink> */}
    </div>
  );
};

export default ErrorFallback;
