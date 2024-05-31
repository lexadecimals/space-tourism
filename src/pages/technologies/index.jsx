import { NavLink, useParams } from 'react-router-dom';

import Technology from '../../components/technology/index.jsx';
import data from '../../data.json';

const Technologies = () => {
  const { tech } = useParams();
  const technologies = data.technology;
  return (
    <>
      <h1>Space Launch 101</h1>
      <nav>
        <ul>
          {technologies &&
            technologies.map((tech) => {
              return (
                <li key={tech.description}>
                  <NavLink to={`/technology/${tech.name}`}>{tech.name}</NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
      <Technology tech={tech} />
      {/* <p>{data[name]}</p> */}
    </>
  );
};

export default Technologies;
