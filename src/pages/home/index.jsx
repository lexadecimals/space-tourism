import styles from './style.module.css';

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>
            So, you want to travel to <br></br>
            <span>space</span>
          </h1>
          <p className={styles.description}>
            Space Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it.Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </div>
        <a href="#" className={styles.link}>
          Explore
        </a>
      </div>
    </>
  );
};

export default Homepage;
