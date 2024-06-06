import data from '../../data.json';
import styles from './style.module.css';

const Location = ({ name, children }) => {
  const body = data.destinations.filter(
    (e) => e.name.toLowerCase() === name
  )[0];
  return (
    <>
      {body && (
        <>
          <img src={`../../${body.images.png}`} alt="" className={styles.img} />
          <div className={styles['content-location']}>
            {children}
            <h2 className={styles['heading-location-l']}>{name}</h2>
            <p className={styles['description-location']}>{body.description}</p>
            <hr />
            <div className={styles.facts}>
              <p className={styles['fact-location']}>
                avg. distance:<br></br>
                <span>{body.distance}</span>
              </p>
              <p className={styles['fact-location']}>
                est. travel time: <br></br>
                <span>{body.travel}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Location;
