import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { loginActions } from "../store/loginSlice";

const Auth = () => {
  const dispatchFunc = useDispatch();

  const onLoginHandler = (event) => {
    event.preventDefault();
    dispatchFunc(loginActions.logIn());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLoginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
          </div>
          <button>Войти</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
