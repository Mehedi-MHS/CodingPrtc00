//css modules only works and can be used only in React components. Here Car component
//css module extension must  be .module.css eg:(my-style.module.css)

import styles from "./my-style.module.css";

const Car = () => {
  return <h1 className={styles.bigBlue}>Hello Car ! </h1>;
};

export default Car;
