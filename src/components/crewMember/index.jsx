import data from '../../data.json';

const CrewMember = ({ name }) => {
  const decodedName = decodeURI(name);
  const crewMember = data.crew.filter((e) => e.name === decodedName)[0];
  return (
    <div>
      {crewMember && (
        <>
          <h1>{name}</h1>
          <img src={`../../${crewMember.images.png}`} alt="" />
          <h2>{crewMember.name}</h2>
          <p>{crewMember.bio}</p>
        </>
      )}
    </div>
  );
};

export default CrewMember;
