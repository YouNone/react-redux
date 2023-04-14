import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {

  const dispatchFunc = useDispatch();
  const counter = useSelector((state) =>  state.counter);

  const incrementHandler = () => {
    dispatchFunc({type: "increment"});
  };

  const increaseHandler = () => {
    dispatchFunc({type: "increase", number: 10});
  };

  const decrementHandler = () => {
    dispatchFunc({type: "decrement"});

  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} className={classes.button}>+</button>

        <button onClick={increaseHandler} className={classes.button}>+ 10</button>

        <button onClick={decrementHandler} className={classes.button}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;
