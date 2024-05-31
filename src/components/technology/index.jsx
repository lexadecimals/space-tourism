import data from '../../data.json';

const Technology = ({ tech }) => {
  const decodedTech = decodeURI(tech).toLowerCase(0);
  const techType = data.technology.filter(
    (e) => e.name.toLowerCase() === decodedTech
  )[0];
  return (
    <div>
      {techType && (
        <>
          <h1>{tech}</h1>
          <img src={`../../${techType.images.png}`} alt="" />
          <p>{techType.description}</p>
        </>
      )}
    </div>
  );
};

export default Technology;
