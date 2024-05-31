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
          <p>{crewMember.bio}</p>
        </>
      )}
    </div>
  );
};

export default CrewMember;
