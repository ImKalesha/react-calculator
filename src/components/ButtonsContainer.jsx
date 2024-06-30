import styles from "./ButtonsContainer.module.css";
import Button from "./Button";

const ButtonsContainer = ({handleOnButtonClick}) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "C", "="];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <Button button={button} handleOnButtonClick= {handleOnButtonClick} key={button}></Button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
