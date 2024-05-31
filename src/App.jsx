import { createRoot } from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

import Homepage from './pages/home/index.jsx';
import Destination from './pages/destination/index.jsx';
import Crew from './pages/crew/index.jsx';
import Technology from './pages/technology/index.jsx';
import Location from './components/location/index.jsx';
import { Root } from './root/index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="destination" element={<Destination />} /> */}
      <Route path="destination/:name" element={<Destination />} />
      {/* <Route path="crew" element={<Crew />} /> */}
      <Route path="crew/:name" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
