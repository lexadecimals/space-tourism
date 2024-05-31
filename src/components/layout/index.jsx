import { useLocation } from 'react-router-dom';

import styles from './style.module.css';

const Layout = ({ children }) => {
  const loc = useLocation().pathname;
  let classNm;

  if (loc.indexOf('destination') > 0) {
    classNm = 'destination';
  } else if (loc.indexOf('technology') > 0) {
    classNm = 'technology';
  } else if (loc.indexOf('crew') > 0) {
    classNm = 'crew';
  } else {
    classNm = 'home';
  }

  return classNm && <div className={styles[classNm]}>{children}</div>;
};
export default Layout;
