// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./app.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [currentExpression, setNewExpression] = useState("");
  let handleOnButtonClick = (event, button) => {
    if (button == '=') {
      let result = eval(currentExpression);
      setNewExpression(result);
    } else if (button == 'C') {
      setNewExpression("");
    } else {
      let newExpression = currentExpression + button;
      setNewExpression(newExpression)
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display expression= {currentExpression}></Display>
        <ButtonsContainer handleOnButtonClick={handleOnButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
