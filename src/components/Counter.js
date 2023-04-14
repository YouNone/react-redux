import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index.js";

const Counter = () => {

  const dispatchFunc = useDispatch();
  const counter = useSelector((state) =>  state.counter.value);
  const isCounterInvisible = useSelector((state) =>  state.counter.isCounterInvisible);

  const incrementHandler = () => {
    dispatchFunc(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatchFunc(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatchFunc(counterActions.decrement());

  };

  const toggleCounterHandler = () => {
    dispatchFunc(counterActions.counterVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
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
