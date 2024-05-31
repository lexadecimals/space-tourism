import data from '../../data.json';

const Location = ({ name }) => {
  const body = data.destinations.filter(
    (e) => e.name.toLowerCase() === name
  )[0];
  return (
    <div>
      {body && (
        <>
          <h1>{name}</h1>
          <img src={`../../${body.images.png}`} alt="" />
          <p>{body.description}</p>
          <p>avg distance: {body.distance}</p>
          <p>est travel time: {body.distance}</p>
        </>
      )}
    </div>
  );
};

export default Location;
