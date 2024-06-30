import styles from './Button.module.css';

const Button = ({button, handleOnButtonClick}) => {
  return (
    <>
      <button className={styles.button} onClick={(event) => handleOnButtonClick(event, button)}>{button}</button>
    </>
  )
}

export default Button;