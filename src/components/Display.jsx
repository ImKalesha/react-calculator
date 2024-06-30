import styles from "./Display.module.css";

const Display = ({ expression }) => {
  return (
    <>
      <input type="text" className={styles.display} value={expression}/>
    </>
  );
};

export default Display;
